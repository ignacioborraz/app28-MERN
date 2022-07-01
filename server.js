require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()

const cors = require('cors')
const Router = require('./routes')
const PORT = process.env.PORT || 4000

app.set('port',PORT)

app.get('/', (req, res) => {
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!')
})

app.use(cors())
app.use(express.json())
app.use('/apiJobs', Router)

app.listen(app.get('port'), () =>
    console.log('SERVER READY IN PORT: '+app.get('port'))
)