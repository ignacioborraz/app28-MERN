require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()

const cors = require('cors')
const Router = require('./routes')
const PORT = process.env.PORT || 4000
HOST = '0.0.0.0'

app.set('port',PORT)

app.get('/', (req, res) => {
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!')
})

app.use(cors())
app.use(express.json())
app.use('/apiJobs', Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
    app.get("*", (req,res)=> {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(app.get('port'),HOST, () =>
    console.log('SERVER READY IN PORT: '+app.get('port'))
)