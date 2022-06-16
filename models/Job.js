const mongoose = require('mongoose') //requerimos los metodos de mongoose

const jobSchema = new mongoose.Schema ({ //creamos un nuevo esquema de mongoose
    nameJob: {type:String, required:true}, //le pasamos un objeto con los nombres de las propiedades y las caracteristicas de cada una
    photoJob: {type:String, required:true},
    salaryJob: {type:Number, required:true},
    detailJob: {type:String, required:true}
})

const Job = mongoose.model('jobs',jobSchema) //utilizo el metodo que crea un modelo al cual le paso dos parámetros => el nombre de la colección y el esquema
module.exports = Job //exportamos el modelo

//ahora establecemos el controlador del modelo

//itinerary: {type: mongoose.Types.ObjectId , ref:'tineraries'}, //relaciono la colección con un elemento de otra coleccion (lo vamos a ver con populate mas adelante)