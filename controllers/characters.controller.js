const { request, response } = require('express');

const characterGet = ( req = request, res = response) =>{ //se puede desestructurar todo lo que venga del req.query
    const { name = 'No name', page = 1, } = req.query;
    res.json({
        msn : 'Get Api from controller',
        name,
        page
    })
}
const characterPost = ( req, res = response) =>{

    const body = req.body; //muestra todo lo del body - se puede desestructurar para recibir por body solo los valores que se quieren
    res.json({
        
        msn : 'Post Api from controller',
        body
    })
}
const characterPut = ( req, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Put Api from controller',
        id
    })
}
const characterDelete = ( req, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Delete Api from controller',
        id
    })
}

module.exports = {
    characterGet,
    characterPost,
    characterPut,
    characterDelete,
};
