const Company = require('../models/Company')
const Job = require('../models/Job')

const nonUserControllers = {

    getCompanies: async(req,res) => {
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
    }

}

module.exports = nonUserControllers