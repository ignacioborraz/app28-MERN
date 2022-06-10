const express = require('express') //requiero el módulo de express
const app = express() //ejecuto express para crear una app

//creo un archivo .env y defino una variable de entorno con el puerto
//por cuestions de seguridad el archivo .env debe ser ignorado (incluirlo en .gitignore)
//dotenv es una librería que configura nuestra app con las variables de entorno definidas en el archivo .env
require('dotenv').config() //requiero el módulo dotenv
const PORT = process.env.PORT || 4000 //defino el puerto con la variable de estado "o" un numero

app.set('port',PORT) //.set setea o configura una propiedad de app, en este caso el puerto

app.get('/', (req, res) => { //.get lee el endpoint
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!') // y en este caso con .send enviamos información desde el back hacia la vista
})

app.listen(app.get('port'), () => { //.listen escucha el puerto y lo levanta
    console.log('SERVIDOR CORRIENDO EN: '+app.get('port')) //además me muestra por consola este texto
})