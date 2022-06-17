const Router = require('express').Router()

const jobControllers = require('./controllers/jobControllers')
const {createJob,getJobs,getOneJob,modifyJob,deleteJob,getJobsFromOneCompany} = jobControllers

Router.route('/job')
.get(getJobs)
.post(createJob)

Router.route('/job/:id')
.get(getOneJob)
.put(modifyJob)
.delete(deleteJob)

Router.route('/job/company/:id')
.get(getJobsFromOneCompany)

const {createCompany,getCompanies,getOneCompany,modifyCompany,deleteCompany} = require('./controllers/companyControllers') //desestructuro los controladores (forma eficiente)

Router.route('/company')
.get(getCompanies)
.post(createCompany)

Router.route('/company/:id')
.get(getOneCompany)
.put(modifyCompany)
.delete(deleteCompany)

module.exports = Router //exporto el modulo

//voy a requerir las rutas en server para poder conectarme con ellas a la base de datos