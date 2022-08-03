const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.charactersPath = '/api/characters'
        
        // middleware
        this.middleware();

        //routes of application
        this.routes();
        
    };

    middleware(){
        this.app.use( express.static('public'));
        //cors
        this.app.use(cors());

    }
    routes() {
        this.app.use( this.charactersPath, require('../routes/character'));
    };

    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Process running on port ${this.port}`);
        })
    };

};

module.exports = Server