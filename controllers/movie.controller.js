const { request, response } = require('express');

const moviesGet = ( req = request, res = response) =>{ 
    const { name = 'No name', page = 1, } = req.query;
    res.json({
        msn : 'Get Api from controller movie',
        name,
        page
    })
}
const moviesGetById = ( req = request, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Get By Id Api from controller movie',
        id
    })
}
const moviesPost = ( req, res = response) =>{

    const body = req.body;
    res.json({
        
        msn : 'Post Api from controller movie',
        body
    })
}
const moviesPut = ( req, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Put Api from controller movie',
        id
    })
}
const moviesDelete = ( req, res = response) =>{
    const id = req.params.id;
    res.json({
        msn : 'Delete Api from controller movie',
        id
    })
}

module.exports = {
    moviesGet,
    moviesPost,
    moviesPut,
    moviesDelete,
    moviesGetById
};
