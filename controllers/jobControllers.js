const Job = require('../models/Job')

const jobControllers = {

    createJob: async(req,res) => {
        let newJob = {} //defino la variable que va a contener el nuevo trabajo
        let error = null //defino el error, que en primer instancia va a ser nulo
        const {nameJob,photoJob,salaryJob,detailJob} = req.body //desestructuro req.body para utilizar esos datos para crear un nuevo modelo
        try {
            newJob = await new Job({
                nameJob:nameJob,
                photoJob:photoJob,
                salaryJob:salaryJob,
                detailJob:detailJob}).save()
            //newJob = await new Job({nameJob,photoJob,salaryJob,detailJob}).save()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : newJob,
            success: error ? false : true,
            error: error
        })
    },

    getJobs: async(requerimiento,respuesta) => {
        let jobs = [] //defino la variable que va a alojar todos los modelos
        let error = null
        try {
            jobs = await Job.find()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        respuesta.json({
            response: error ? 'ERROR' : jobs,
            success: error ? false : true,
            error: error
        })
    }

}

module.exports = jobControllers //exporto el modulo para utilizarlo en la configuracion de las rutas