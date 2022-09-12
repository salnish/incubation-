const jwt = require("jsonwebtoken");
const bcypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const applicationModel = require("../models/applicationModel");
const mongoose = require("mongoose");

//Register new user
//@Route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }
  //check if user exists
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already Exists !");
  }
  //hash the password
  const salt = await bcypt.genSalt(10);
  const hashedPassword = await bcypt.hash(password, salt);

  //Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user.id,
      email: user.email,
      token: generateToKen(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//@desc Authenticate a user
//@route POST /api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email
  const user = await User.findOne({ email });

  if (user && (await bcypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToKen(user.id),
    });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

//@form submission
//@route POST /api/user/formSubmit
//@access Private
const formSubmit = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("please add fields");
  }
  const {
    name,
    address,
    city,
    state,
    email,
    phone,
    companyName,
    teamBackground,
    companyProducts,
    problem,
    solution,
    proposition,
    competitors,
    revenue,
    marketSize,
    marketPlan,
    options,
    proposal,
  } = req.body;

  const application = await applicationModel.create({
    name,
    address,
    city,
    state,
    email,
    phone,
    companyName,
    teamBackground,
    companyProducts,
    problem,
    solution,
    proposition,
    competitors,
    revenue,
    marketSize,
    marketPlan,
    options,
    proposal,
    userId: req.user.id,
    bookingStatus: false,
  });

  if (application) {
    res.status(201).json({
      name: application.name,
      created: true,
    });
  } else {
    res.status(400);
    throw new Error("Invalid form data");
  }
});

//@get form data
//@route GET /api/user/getSubmit
//@access private
const getForm = asyncHandler(async (req,res)=>{
  
    let id=mongoose.Types.ObjectId(req.user.id)
    console.log("iffffffffffff")
    console.log(id)
  const appData=await applicationModel.findOne({userId:id});
  if(appData){
    console.log("iffffffffffff")
    console.log(appData)
    res.status(200).json(appData);
  }else{
    console.log("elsesesldlls")
    console.log(appData)
    res.status(400);
    throw new Error("form data not found");

  }

})


//Generate JWT
const generateToKen = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  formSubmit,
  getForm
};
