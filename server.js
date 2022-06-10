const express = require('express')
const app = express()

const PORT = 4000

app.set('port',PORT)

app.get('/', (req, res) => {
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!')
})

app.listen(app.get('port'), () => {
    console.log('SERVIDOR CORRIENDO EN: '+app.get('port'))
})