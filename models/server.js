const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.charactersPath = '/api/characters';
        this.userPath = '/api/register';
        this.authPath = '/api/auth';
        this.moviePath = '/api/movie';
        this.genrePath = '/api/genre';
        
        // middleware
        this.middleware();

        //routes of application
        this.routes();
        
    };

    middleware(){
        this.app.use( express.static('public'));
        //cors
        this.app.use(cors());

        //read y parse body
        this.app.use( express.json() );

    }
    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.charactersPath, require('../routes/character'));
        this.app.use( this.userPath, require('../routes/user'));
        this.app.use( this.moviePath, require('../routes/movies'));
        this.app.use( this.genrePath, require('../routes/genre'));
        
    };

    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Process running on port ${this.port}`);
        })
    };

};

module.exports = Server