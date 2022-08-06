
const { Schema, model } = require('mongoose');

const MovieSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique : true
    },

    Image : {
        type: Number,
        required: [true, 'Image is required'],
    },

    moviesAssociated: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = model( 'Movie', MovieSchema );
