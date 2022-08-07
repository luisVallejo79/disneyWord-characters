
const { Schema, model } = require('mongoose');

const genreSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique : true
    },

    image : {
        type: String,
        required: [true, 'Image is required'],
    },

    moviesAssociated: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }],
    
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = model( 'Genre', genreSchema );
