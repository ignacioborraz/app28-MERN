const User = require('../models/User')

const userControllers = {

    createUser: async(requerimiento,respuesta) => {
        let newUser = {}
        let error = null
        const {nameUser,photoUser,roleUser,company} = requerimiento.body
        try {
            newUser = await new User({nameUser,photoUser,roleUser,company})
                .save()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        respuesta.json({
            response: error ? 'ERROR' : newUser,
            success: error ? false : true,
            error: error
        })
    },

    getUsers: async(req,res) => {
        let users = []
        let error = null
        try {
            users = await User.find()
                .populate("company", {nameCompany:1, detailCompany:1}) //populate es un método que me permite traer datos del parámetro que se define (en este caso, me trae una propiedad del modelo)
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : users,
            success: error ? false : true,
            error: error
        })
    },

    getOneUser: async(req,res) => {
        let oneUser = {}
        let error = null
        let {id} = req.params
        try {
            oneUser = await User.findOne({_id:id})
                .populate("company") //populate es un método que me permite traer datos del parámetro que se define (en este caso, me trae el modelo entero)
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : oneUser,
            success: error ? false : true,
            error: error
        })
    },
/* 
    modifyJob: async(req,res) => {
        let putJob = {}
        let error = null
        let {id} = req.params
        try {
            putJob = await Job.findOneAndUpdate({_id:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : putJob,
            success: error ? false : true,
            error: error
        })
    },

    deleteJob: async(req,res) => {
        let deleteJob = {}
        let error = null
        let {id} = req.params
        try {
            deleteJob = await Job.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : deleteJob,
            success: error ? false : true,
            error: error
        })
    },

    getJobsFromOneCompany: async(req,res) => {
        let jobs = []
        let error = null
        let {id} = req.params
        try {
            jobs = await Job.find({company:id})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : jobs,
            success: error ? false : true,
            error: error
        })
    }
*/
}

module.exports = userControllers