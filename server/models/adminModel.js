const mongoose = require('mongoose');
const {Schema} = mongoose 

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password']
    },
},
{
    timestamps:true
})
const adminModel = mongoose.model("admin",adminSchema)
module.exports = adminModel