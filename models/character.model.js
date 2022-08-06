
const { Schema, model } = require('mongoose');

const CharacterSchema = Schema({
    Image : {
        type: String,
        required: [true, 'Image is required']
    },

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    age : {
        type: Number,
        required: [true, 'Age is required'],
        unique: true
    },

    weight: {
        type: Number,
        required: [true, 'Password is required'],
    },

    history: {
        type: String,
        required: [true, 'Weight is required'],
    },

    moviesAssociated: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },

    status: {
        type: Boolean,
        default: true
    },
});

module.exports = model( 'Character', CharacterSchema );
