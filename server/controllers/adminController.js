const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const adminModel =require("../models/adminModel")
const applicationModel = require("../models/applicationModel");
const slotsModel= require("../models/slotsModel")
const mongoose = require("mongoose");



//@desc admin login
//@Route POST/api/admin/
//@Access public
const adminLogin=asyncHandler(async(req,res)=>{
  const { email, password } = req.body;

  //check for user email
  const admin = await adminModel.findOne({ email });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      email: admin.email,
      token: generateToKen(admin.id),
    });
  } else {
    res.status(400).send("Invalid credentials");
  }
})


//@desc Get all application Forms
//@Route GET/api/admin/getAppData
//@Access private
const allUsers = asyncHandler(async (req, res) => {
  const alluserData = await User.find({});
  if (alluserData) {
    res.status(200).json(alluserData);
  } else {
    res.status(400);
    throw new Error("Form Data not found");
  }
});

//@desc Get all application Forms
//@Route GET/api/admin/getAppData
//@Access private
const getAllApp = asyncHandler(async (req, res) => {
  const allAppData = await applicationModel.find({});
  if (allAppData) {
    res.status(200).json(allAppData);
  } else {
    res.status(400);
    throw new Error("Form Data not found");
  }
});

//@desc Get approved application Forms
//@Route GET/api/admin/approvedForms
//@Access private
const approvedForms = asyncHandler(async (req, res) => {
  await applicationModel.find({status:'Approved'})
  .then((approvedData)=>{
    res.status(200).json(approvedData)
  }).catch((err)=>{
    res.status(400);
    throw new Error("No approved forms found")
  })
});

//@desc View application Form
//@Route GET/api/admin/viewApplication
//@Access private
const viewApplication = asyncHandler(async (req, res) => {
 await applicationModel.findById(req.params.id).then((application)=>{
    res.status(200).json(application);
 }).catch((err)=>{
    res.status(400);
    throw new Error("No application found")
 })
});

//@desc PUT  application Status
//@Route PUT/api/admin/updateStatus
//@Access private
const updateStatus = asyncHandler(async(req,res)=>{
    const status = req.body;
     await applicationModel.findByIdAndUpdate(
        {_id:status.id},
        {status:status.status}
    ).then((d)=>{
        console.log(d)
        res.status(200).json(d);
    }).catch((err)=>{
        res.status(400);
        throw new Error("Status Not Updated")
    })
})

//@desc GET  All Slots 
//@Route GET/api/admin/allSlots
//@Access private
const allSlots= asyncHandler(async(req,res)=>{
  await slotsModel.find({})
  .then((slots)=>{
    res.status(200).json(slots)
  })
  .catch((err)=>{
    res.status(400);
    throw new Error("No slots found")
  })
})

//@desc  Book the slot
//@Route PUT/api/admin/slotBook
//@Access private
const slotBook=asyncHandler(async(req,res)=>{
  const {id,section,slNo,companyId} =req.body
  await applicationModel.findOneAndUpdate(
    {_id:companyId},
    {$set:{bookingStatus:true,slotCode:id,section:section,slot_no:slNo,status:'Booked'}}
  )
  .then(async(company)=>{
    await slotsModel.findByIdAndUpdate(
      {_id:id},
      {
        $set:{
          selected:true,
          companyname:company.companyName,
          userId:company.userId
        }
      }

    ).then((d)=>{
      res.status(200).json(d)
    }).catch((err)=>{
      console.log(err);
      res.status(400);
      throw new Error("Slot not booked")
    })
  }).catch((err)=>{
    res.status(400);
    throw new Error("Application not found")
  })
 
})

//Generate JWT
const generateToKen = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getAllApp,
  viewApplication,
  updateStatus,
  allSlots,
  approvedForms,
  slotBook,
  adminLogin,
  allUsers,
};
