const Job = require('../models/Job')

const jobControllers = {

    createJob: async(requerimiento,respuesta) => {
        const {nameJob,photoJob,salaryJob,detailJob} = requerimiento.body.nameJob
        console.log(requerimiento.body.nameJob)
        const company = requerimiento.user.company
        console.log(requerimiento.user.company)        
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

/*     getJobs: async(req,res) => {
        const company = req.user.company
        let jobs = []
        let error = null
        try {
            jobs = await Job.find({company:company})
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
    }, */

    getOneJob: async(req,res) => {
        let {id} = req.params
        let oneJob = {}
        let error = null
        try {
            oneJob = await Job.findOne({_id:id})
                .populate("company")
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
        let {id} = req.params
        const company = requerimiento.user.company
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

    deleteJob: async(req,res) => {
        let {id} = req.params
        const company = requerimiento.user.company
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