const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema ({
    nameJob: {type:String, required:true},
    photoJob: {type:String, required:true},
    salaryJob: {type:Number, required:true},
    detailJob: {type:String, required:true},
    company: {type: mongoose.Types.ObjectId , ref:'companies'},
})

const Job = mongoose.model('jobs',jobSchema)
module.exports = Job

