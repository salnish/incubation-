const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const applicationModel = require("../models/applicationModel");
const mongoose = require("mongoose");
const { application } = require("express");

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

const viewApplication = asyncHandler(async (req, res) => {
 await applicationModel.findById(req.params.id).then((application)=>{
    res.status(200).json(application);
 }).catch((err)=>{
    res.status(400);
    throw new Error("No application found")
 })
});

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

module.exports = {
  getAllApp,
  viewApplication,
  updateStatus,
};
