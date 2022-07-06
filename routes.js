const Router = require('express').Router()
const validator = require('./config/validator')
const passport = require('./config/passport')

const jobControllers = require('./controllers/jobControllers')
const {createJob,getJobs,getOneJob,putJob,deleteJob,getJobsFromOneCompany,getJobsFromCompanies} = jobControllers

Router.route('/job')
.get(getJobs)
//Router.route(passport.authenticate('jwt', {session:false}), '/job')
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

const {signIn,signUp,verifyMail,signOut,verifyToken,getUsers,getOneUser,putUser,deleteUser} = require('./controllers/userControllers')

Router.route('/auth')
.get(getUsers)

Router.route('/auth/:id')
.get(getOneUser)
.put(putUser)
.delete(deleteUser)

Router.route('/auth/signUp')
.post(validator,signUp)

Router.route('/auth/signIn')
.post(signIn)

Router.route('/verify/:string')
.get(verifyMail)

Router.route('/auth/signOut')
.post(signOut)

Router.route('/token')
.get(passport.authenticate('jwt', {session:false}), verifyToken)

module.exports = Router //exporto el modulo

//voy a requerir las rutas en server para poder conectarme con ellas a la base de datos