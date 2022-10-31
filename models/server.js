const express = require('express');

class Server{
    constructor(){
        this.app = express()
        this.app.use(cors());

        this.app.use(Express.json())

        this.app.use(Express.statuc('public'))
        this.routes();
    }
    
    routes() {
        this.app.use('/precios',require('../routes/precios'))
        this.app.use('/paquetes',require('../routes/paquetes'))
        this.app.use('/envios',require('../routes/envios'))
        this.app.use('/detallesenvios',require('../routes/detallesEnvio'))
        this.app.use('/seguimiento', require('../routes/seguimiento'))

        

        this.app.get('/', (req, res) => res.send('Hello World'))
    }

    listen(){
        this.app.listen(process.env.PORT, () =>
        console.log("El puerto esta corriendo el puerto TCP"+ process.env.PORT))

    }
}

module.exports = Server