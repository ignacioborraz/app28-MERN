const mongoose = require('mongoose') //requiero mongoose
//mongoose es una libreria que me proporciona un monton de funciones para conectar mi servidor/app a la base de datos de MONGO

mongoose.connect(process.env.CONECTION_MONGODB,{ //utilizo el método connect de mongoose que requiere dos parámetros(la uri de conexion y un objeto con dos propiedades)
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(()=>console.log('DATABASE CONNECTED')) //si se logra conectar, me avisa por consola
.catch(err => console.error(err)) //si no se conecta, me informa el error

//una vez configurada la conexión, la tengo que requerir antes de que se inicie la app
//luego configuro los modelos