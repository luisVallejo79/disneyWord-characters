
const { Schema, model } = require('mongoose');

const MovieSchema = Schema({

    Image : {
        type: Number,
        required: [true, 'Image is required'],
    },

    title: {
        type: String,
        required: [true, 'title is required'],
        unique : true
    },

    creationDate: {
        type: Date,
        required: [true, 'Creation Date is required'],
        unique : true
    },

    Rating : {
        type: Number,
        required: [true, 'Rating is required'],
        
    },

    charactersAssociated: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },

    status: {
        type: Boolean,
        default: true
    }
});

module.exports = model( 'Movie', MovieSchema );
