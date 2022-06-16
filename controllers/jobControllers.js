const Job = require('../models/Job') //requiero el modelo

const jobControllers = { //defino un objeto con los controladores del modelo

    createJob: async(requerimiento,respuesta) => { //funcion asincrona que creará un trabajo
        let newJob = {} //defino la variable que va a contener el nuevo trabajo
        let error = null //defino el error, que en primer instancia va a ser nulo
        const {nameJob,photoJob,salaryJob,detailJob} = requerimiento.body //desestructuro req.body para utilizar esos datos para crear un nuevo modelo
        try { //intento utilizar el constructor de modelos
            newJob = await new Job({ //espero esa cración
                nameJob:nameJob,
                photoJob:photoJob,
                salaryJob:salaryJob,
                detailJob:detailJob}).save() //muy importante => guardar el modelo creado
            //newJob = await new Job({nameJob,photoJob,salaryJob,detailJob}).save() //forma optima
        } catch(errorDeCatcheo) { //si no puede crear el modelo
            error=errorDeCatcheo //defino el error
            console.log(error) //y lo muestro en consola
        }
        respuesta.json({ //defino la respuesta como un json con las siguientes propiedades (puedo definir la cantidad de propiedades y el contenido que quiera!)
            response: error ? 'ERROR' : newJob,
            success: error ? false : true,
            error: error
        })
        //respuesta.json({response: error ? error : newJob}) //respuesta más sencilla
    },

    getJobs: async(req,res) => {
        let jobs = []
        let error = null
        try {
            jobs = await Job.find() //el metodo find encuentra
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
            oneJob = await Job.find({_id:id}) //el metodo find con un objeto pasado como parámetro encuentra algo que concida con esa propiedad
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

    modifyJob: async(req,res) => {
        let putJob = {}
        let error = null
        let {id} = req.params
        try {
            putJob = await Job.findOneAndUpdate( //el metodo findOneAndUpdate requiere tres parámetros
                {_id:id}, //el parametro necesario para el modelo que tiene que encontrar
                req.body, //la modificacion que vamos a pasar en body
                {new: true}) //y esta opcion en true que "cambia" el modelo viejo por el actualizado (en caso de false: crea un modelo nuevo con la modificación)
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : 'MODIFIED', //no quiero mostrar el objeto eliminado en el JSON de respuesta
            //response: error ? 'ERROR' : putJob,
            success: error ? false : true,
            error: error
        })
    },

    deleteJob: async(req,res) => {
        let deleteJob = {}
        let error = null
        let {id} = req.params
        try {
            deleteJob = await Job.findOneAndDelete({_id:id}) //el metodo findOneAndDelete encuentra y elimina
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : 'DELETED', //no quiero mostrar el objeto eliminado en el JSON de respuesta
            //response: error ? 'ERROR' : deleteJob,
            success: error ? false : true,
            error: error
        })
    }

}

module.exports = jobControllers //exporto el modulo para utilizarlo en la configuracion de las rutas