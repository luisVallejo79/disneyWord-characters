
const { Schema, model } = require('mongoose');

const CharacterSchema = Schema({
    image : {
        type: String,
        required: [true, 'Image is required']
    },

    name: {
        type: String,
        required: [true, 'Name is required'],
        unique : true
    },

    age : {
        type: Number,
        required: [true, 'Age is required']
    },

    weight: {
        type: Number,
        required: [true, 'weight is required']
    },

    history: {
        type: String,
        required: [true, 'history is required'],
    },

    // moviesAssociated: {
        // type: Schema.Types.ObjectId,
        // ref: 'Movie',
        // required: true
    // },

    status: {
        type: Boolean,
        default: true
    },
});

module.exports = model( 'Character', CharacterSchema );
