
const { Schema, model } = require('mongoose');

const MovieSchema = Schema({

    image : {
        type: String,
        required: [true, 'Image is required'],
    },

    title: {
        type: String,
        required: [true, 'title is required'],
        unique : true
    },

    creationDate: {
        type: Date,
        default : Date.now
    },

    rating : { type: Number, min: 1, max: 5,
        require :true },

    charactersAssociated: [{
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    }],

    status: {
        type: Boolean,
        default: true
    }
});

module.exports = model( 'Movie', MovieSchema );
