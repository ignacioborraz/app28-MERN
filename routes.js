const Router = require('express').Router()
const validator = require('./config/validator')
const passport = require('./config/passport')

//--------> NON USER <--------\\
const {getCompanies,getJobs} = require('./controllers/nonUserControllers') 
Router.route('/company').get(getCompanies)
Router.route('/job').get(getJobs)

//--------> ADMIN <--------\\
const {createJobA} = require('./controllers/adminJobControllers')
Router.route('/jobA').post(passport.authenticate('jwt', {session:false}), createJobA)
Router.route('/jobA').post(passport.authenticate('jwt', {session:false}), createJobA)

const {createCompany} = require('./controllers/companyControllers') 
Router.route('/company').post(createCompany)

/*
//--------> OWNER <--------\\
const jobControllers = require('./controllers/jobControllers')
const {createJob,getOneJob,putJob,deleteJob} = jobControllers

Router.route('/job')
.get(getJobs)
//.post(createJob)
.post(passport.authenticate('jwt', {session:false}), createJob) //funciona en postman pero no en el front

Router.route('/job/:id')
.get(getOneJob)
.put(putJob)
.delete(deleteJob)


const {createCompany,getOneCompany,putCompany,deleteCompany} = require('./controllers/companyControllers') //desestructuro los controladores (forma eficiente)

Router.route('/company')
.get(getCompanies)
.post(createCompany)

Router.route('/company/:id')
.get(getOneCompany)
.put(putCompany)
.delete(deleteCompany)
 */
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