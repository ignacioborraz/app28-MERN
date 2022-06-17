const mongoose = require('mongoose')

const companySchema = new mongoose.Schema ({
    job: {type: mongoose.Types.ObjectId , ref:'jobs'}, //esta propiedad relaciona este modelo con otro de otra coleccion
    nameCompany: {type:String, required:true},
    logoCompany: {type:String, required:true},
    detailCompany: {type:String, required:true}
})

const Company = mongoose.model('companies',companySchema)
module.exports = Company

//ahora establecemos el controlador del modelo