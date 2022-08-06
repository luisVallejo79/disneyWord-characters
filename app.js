const Server = require('./models/server');
const mongoose = require('mongoose');

require('dotenv').config();


const server = new Server();

server.listen();

const dbConnect = () =>{
    try {
        
        mongoose.connect( process.env.MONGODB_CNN );
        console.log('Database online');

    } catch (error) {
        console.log(error);
        throw new error('Error starting database');
    }
}
dbConnect();