const Company = require('../models/Company')
const crypto = require('crypto')
const path =require('path') //REQUERIMOS

const companyControllers = {

    createCompany: async(requerimiento,respuesta) => {
        console.log(requerimiento.files)
        const {nameCompany,detailCompany} = requerimiento.body
        const {file} = requerimiento.files //REQ.FILES SE GENERA POR EL PAQUETE INSTALADO
        let newCompany = {}
        let error = null        
        try {
            const fileName = crypto.randomBytes(10).toString('hex') + "." + file.name.split(".")[file.name.split(".").length - 1] //GENERAMOS NOMBRE ALEATORIO
            const route = path.resolve('storage/companies',fileName) //RESOLVEMOS LA RUTA
            file.mv(route, err => { //METODO MV DE FILE
                if (err) {
                    console.log(err)
                } else {
                    console.log("uploaded file!")
                }
            })
            newCompany = await new Company({nameCompany,logoCompany:fileName,detailCompany}).save()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        respuesta.json({
            response: error ? 'ERROR' : newCompany,
            success: error ? false : true,
            error: error
        })
    },

/*     getCompanies: async(req,res) => {
        let companies = []
        let error = null
        try {
            companies = await Company.find()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : companies,
            success: error ? false : true,
            error: error
        })
    }, */

    getOneCompany: async(req,res) => {
        let oneCompany = {}
        let error = null
        let {id} = req.params
        try {
            oneCompany = await Company.findOne({_id:id})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : oneCompany,
            success: error ? false : true,
            error: error
        })
    },

    putCompany: async(req,res) => {
        let putCompany = {}
        let error = null
        let {id} = req.params
        try {
            putCompany = await Company.findOneAndUpdate({_id:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : putCompany,
            success: error ? false : true,
            error: error
        })
    },

    deleteCompany: async(req,res) => {
        let deleteCompany = {}
        let error = null
        let {id} = req.params
        try {
            deleteCompany = await Company.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : deleteCompany,
            success: error ? false : true,
            error: error
        })
    }
    
}

module.exports = companyControllers