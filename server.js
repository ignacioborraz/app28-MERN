const express = require('express') //requiero el módulo de express
const app = express() //ejecuto express para crear una app
const cors = require('cors') //requiero el modulo de cors

require('dotenv').config() //requiero dotenv que es una librería que configura nuestra app con las variables de entorno definidas en el archivo .env
const Router = require('./routes') //requiero el modulo de las rutas de conexion

const PORT = process.env.PORT || 4000 //defino el puerto con la variable de estado "o" un numero
//si defino PORT antes de requerir dotenv: va a tomar 4000, sino: EL DEFINIDO EN LA VARIABLE DE ESTADO CORRESPONDIENTE

//creo un archivo .env y defino una variable de entorno con el puerto
//por cuestions de seguridad el archivo .env debe ser ignorado (incluirlo en .gitignore)

require('./database') //requiero la conexion a la base de datos
app.set('port',PORT) //.set setea o configura una propiedad de app, en este caso el puerto (podés usar directamente PORT, solamente lo puse como ejemplo de otros métodos)

app.get('/', (req, res) => { //.get lee el endpoint
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!') // y en este caso con .send enviamos información desde el back hacia la vista (front)
})

app.use(cors()) //la app/server usa el metodo cors para obtener permisos de acceso a la base de datos
app.use(express.json()) //la app/server usa un metodo de express que convierte todo a JSON
app.use('/apiJobs', Router) //la app/server usa las rutas y como intermediario añade a cada endpoint => /apiDeJobs

app.listen(app.get('port'), () => //.listen escucha el puerto y lo levanta
    console.log('SERVER READY IN PORT: '+app.get('port')) //muestra por consola este texto
)