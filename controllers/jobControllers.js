const Job = require('../models/Job')

const jobControllers = {

    createJob: async(requerimiento,respuesta) => {
        console.log(requerimiento.body.nameJob)
        let newJob = {}
        let error = null
        //const company = requerimiento.user.company.id
        const {nameJob,photoJob,salaryJob,detailJob,company} = requerimiento.body.nameJob
        try {
            newJob = await new Job({
                nameJob:nameJob,
                photoJob:photoJob,
                salaryJob:salaryJob,
                detailJob:detailJob,
                company:company}).save()
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

    getJobs: async(req,res) => {
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

    getOneJob: async(req,res) => {
        let oneJob = {}
        let error = null
        let {id} = req.params
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

    putJob: async(req,res) => {
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

    getJobsFromCompanies: async(req,res) => {
        let jobs = []
        let error = null
        let {nameJob} = req.body
        try {
            jobs = await Job.find({nameJob:nameJob})
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
    }

}

module.exports = jobControllers