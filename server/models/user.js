const mongoose = require('mongoose');
const {Schema} = mongoose 

const userSchema = new mongoose.Schema({
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
const userModel = mongoose.model("user",userSchema)
module.exports = userModel