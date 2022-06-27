const Router = require('express').Router()

const jobControllers = require('./controllers/jobControllers')
const {createJob,getJobs,getOneJob,putJob,deleteJob,getJobsFromOneCompany,getJobsFromCompanies} = jobControllers

Router.route('/job')
.get(getJobs)
.post(createJob)

Router.route('/job/:id')
.get(getOneJob)
.put(putJob)
.delete(deleteJob)

Router.route('/job/company/:id')
.get(getJobsFromOneCompany)

Router.route('/jobs')
.get(getJobsFromCompanies)

const {createCompany,getCompanies,getOneCompany,putCompany,deleteCompany} = require('./controllers/companyControllers') //desestructuro los controladores (forma eficiente)

Router.route('/company')
.get(getCompanies)
.post(createCompany)

Router.route('/company/:id')
.get(getOneCompany)
.put(putCompany)
.delete(deleteCompany)

const {signInUser,signUpUser} = require('./controllers/userControllers')

Router.route('/auth/signUp').post(signUpUser)

Router.route('/auth/signIn')
.post(signInUser)

module.exports = Router //exporto el modulo

//voy a requerir las rutas en server para poder conectarme con ellas a la base de datos