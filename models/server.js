const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.path = '/api/portafolio'

        this.rutas()
    }

    //Middlewares
    middleware(){
        //CORS
        this.app.use(cors())

        //METODO UTILIZADO
        this.app.use(express.json())
    }

    rutas(){
        this.app.use(this.path, require('../routes/rutas'))
    }
    

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('App running in port: ' + this.port)
        })
    }
}

module.exports = {
    Server
}