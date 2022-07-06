const Job = require('../models/Job')

const jobControllers = {

    createJobA: async(requerimiento,respuesta) => {
        const {nameJob,photoJob,salaryJob,detailJob,company} = requerimiento.body.nameJob
        console.log(requerimiento.body.nameJob)     
        let newJob = {}
        let error = null
        try {
            newJob = await new Job({nameJob,photoJob,salaryJob,detailJob,company}).save()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        respuesta.json({
            response: error ? 'ERROR' : newJob,
            success: error ? false : true,
            error: error
        })
    },

    getJobsA: async(req,res) => {
        let jobs = []
        let error = null
        try {
            jobs = await Job.find()
                .populate("company", {nameCompany:1})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : jobs,
            success: error ? false : true,
            error: error
        })
    },

    getOneJobA: async(req,res) => {
        let {id} = req.params
        let oneJob = {}
        let error = null        
        try {
            oneJob = await Job.findOne({_id:id})
                .populate("company") //populate es un método que me permite traer datos del parámetro que se define (en este caso, me trae el modelo entero)
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : oneJob,
            success: error ? false : true,
            error: error
        })
    },

    putJobA: async(req,res) => {
        let {id} = req.params
        let putJob = {}
        let error = null        
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

    deleteJobA: async(req,res) => {
        let {id} = req.params
        let deleteJob = {}
        let error = null
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
    }
    
}

module.exports = jobControllers