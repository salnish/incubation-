const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const applicationModel = require("../models/applicationModel");
const mongoose = require("mongoose");

//@desc Get all application Forms
//@Route GET/api/admin/getAppData
//@Access private
const getAllApp = asyncHandler(async (req, res) => {
  const allAppData = await applicationModel.find({});
  if (allAppData) {
    console.log(allAppData);
    res.status(200).json(allAppData);
  } else {
    res.status(400);
    throw new Error("Form Data not found");
  }
});

const viewApplication = asyncHandler(async (req, res) => {
    console.log("req.params.id");
  console.log(req.params.id);
});

module.exports = {
  getAllApp,
  viewApplication,
};
