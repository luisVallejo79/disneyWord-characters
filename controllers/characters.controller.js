const { request, response } = require('express');
const Character = require('../models/character.model');

const characterGet = async ( req = request, res = response) =>{ //se puede desestructurar todo lo que venga del req.query
    
    const character = await Character.find( { status : true});
    res.json({
        msn : 'Get character',
        character
    })
}
const characterGetById = async( req = request, res = response) =>{
    const id = req.params.id;
    const characterById = await Character.findById(id)
    res.json({
        msn : 'Get By Id Api from controller character',
        characterById
    })
}
const characterPost = async( req, res = response) =>{

    const body = req.body; 
    const character = new Character(body);
    console.log({body});
    // data para bd
    await character.save();

    res.json({
        character
    })
}
const characterPut = async ( req, res = response) =>{
    const id = req.params.id;
    const {_id, ...rest} = req.body;
    const characterUpdated = await Character.findByIdAndUpdate(id, rest);
    res.json({
        msn : 'Put Api from controller character',
        characterUpdated
    })
}
const characterDelete = async( req, res = response) =>{
    const { id } = req.params;
    const character = await Character.findByIdAndUpdate( id, { status: false } );
    res.json({
        msn : 'Delete Api from controller character',
        character
    })
}

module.exports = {
    characterGet,
    characterGetById,
    characterPost,
    characterPut,
    characterDelete
};
