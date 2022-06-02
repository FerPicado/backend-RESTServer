const express = require('express');
const cors = require('cors');

//se trabajara express basado en clases para que sea un codigo de senior

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //middlewares
        this.middlewares();

        //lectura y parseo del body
        this.app.use(express.json());

        //cuando se llame al constructor, voy a llamar mis rutas.
        this.routes();

    }

    middlewares() {

        this.app.use(cors())
        this.app.use(express.static('Public'));
    }

    routes() {

        this.app.use(this.usersPath, require('../Routes/user.routes'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Running on port: ', this.port)
        });
    }

}



module.exports = Server;