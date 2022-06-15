const Router = require('express').Router() //requiero el metodo Router de la librerias express 

//const {createJob,getJobs} = require('./controllers/jobControllers') //desestructuro los controladores (forma eficiente)
const jobControllers = require('./controllers/jobControllers') //forma en dos lineas
const {createJob,getJobs} = jobControllers

Router.route('/job') //a Router le configuro una ruta (/job)
.get(getJobs) //a la ruta en cuestión, le aplico el metodo GET para asignarle el controlador de lectura/obtencion de modelos (jobs)
.post(createJob) //a la ruta en cuestión, le aplico el metodo POST para asignarle el controlador de creación de modelos (job)

//Router.route('/job').get(getJobs).post(createJob) //forma optima para pocos controladores

//Router.route('/job').get(getJobs) //forma casi optima
//Router.route('/job').post(createJob) //forma casi optima

module.exports = Router //exporto el modulo

//voy a requerir las rutas en server para poder conectarme con ellas a la base de datos