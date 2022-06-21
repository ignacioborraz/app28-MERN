const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    nameUser: {type:String, required:true},
    photoUser: {type:String, required:true},
    roleUser: {type:String, required:true},
    company: {type: mongoose.Types.ObjectId , ref:'companies'},
})

const User = mongoose.model('users',userSchema)
module.exports = User

