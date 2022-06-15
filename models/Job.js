const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const jobSchema = new mongoose.Schema ({ //construimos el modelo de tabla
    nameJob: {type:String, required:true},
    photoJob: {type:String, required:true},
    salaryJob: {type:Number, required:true},
    detailJob: {type:String, required:true}
})

const Job = mongoose.model('jobs',jobSchema) //defino el constructor del modelo con el nombre de coleccion y el nombre de la tabla del modelo
module.exports = Job //exportamos el modelo

//ahora establecemos el controlador del modelo


//itinerary: {type: mongoose.Types.ObjectId , ref:'tineraries'}, //relaciono la colección con un elemento de otra coleccion