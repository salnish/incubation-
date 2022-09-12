const mongoose = require('mongoose')
const {Schema} = mongoose 

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    companyName:{
        type:String,
        require:true
    },
    teamBackground:{
        type:String,
        require:true
    },
    companyProducts: {
        type: String,
        require: true
    },
    problem: {
        type: String,
        require: true
    },
    solution: {
        type: String,
        require: true
    },
    proposition: {
        type: String,
        require: true
    },
    competitors: {
        type: String,
        require: true
    },
    revenue: {
        type: String,
        require: true
    },
    marketSize: {
        type: String,
        require: true
    },
    marketPlan: {
        type: String,
        require: true
    },
    options: {
        type: String,
        require: true
    },
    proposal: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default:'New'

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
        unique: true
    },
    bookingStatus: {
        type: Boolean,
    },
    slotCode: {
        type: String,
        default:'Not allocated'
    },
    slot_no: {
        type:String,
        default:'Not allocated'
    },
    section: {
        type:String,
        default:'Not allocated'
    },
},
{
    timestamps:true
})

const applicationModel = mongoose.model("applications",applicationSchema)
module.exports = applicationModel