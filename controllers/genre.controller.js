const { request, response } = require('express');

const genreGet = ( req = request, res = response) =>{ 
    const { name = 'No name', page = 1, } = req.query;
    res.json({
        msn : 'Get Api from controller Genre',
        name,
        page
    })
}
const genreGetById = ( req = request, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Get By Id Api from controller Genre',
        id
    })
}
const genrePost = ( req, res = response) =>{

    const body = req.body;
    res.json({
        
        msn : 'Post Api from controller Genre',
        body
    })
}
const genrePut = ( req, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Put Api from controller Genre',
        id
    })
}
const genreDelete = ( req, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Delete Api from controller Genre',
        id
    })
}

module.exports = {
    genreGet,
    genrePost,
    genrePut,
    genreDelete,
    genreGetById
};
