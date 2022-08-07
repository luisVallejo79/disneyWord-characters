const { request, response } = require('express');
const Genre = require('../models/genre.model');

const genreGet = async( req = request, res = response) =>{ 
    const genre = await Genre.find( { status : true});

    res.json({
        msn : 'Get Api from controller Genre',
        genre
    })
}
const genreGetById = async(req = request, res = response) =>{
    const id = req.params.id;
    const genre = await Genre.findById(id);
    res.json({
        msn : 'Get By Id Api from controller Genre',
        genre
    })
}
const genrePost = async( req, res = response) =>{
    const { name, image, moviesAssociated}  = req.body; 

    const genreTrue = await Genre.findOne({name: name});
    if (genreTrue) {
      return res.status(400).json({
        msg: "This name is already registered",
      });
    }

    const genre = new Genre({name, image, moviesAssociated});
    await genre.save(); 
    
    res.json({
        
        msn : 'Post Api from controller Genre',
        genre
    })
}
const genrePut = async( req, res = response) =>{
    const id = req.params.id;
    const {_id, ...rest} = req.body;
    const genreUpdate = await Genre.findByIdAndUpdate(id, rest);
    res.json({
        msn : 'Put Api from controller Genre',
        genreUpdate
    })
}
const genreDelete = async( req, res = response) =>{
    const id = req.params.id;
    const idDatabase = await Genre.findById( id, { status: false })

    if (idDatabase) {
        return res.json({
            msm : `${id} belongs to a partially eliminated genre`
        })
    }

    const genreDelete = await Genre.findByIdAndUpdate( id, { status: false });
    res.json({
        msn : 'Delete Api from controller Genre',
        genreDelete
    })
}

module.exports = {
    genreGet,
    genrePost,
    genrePut,
    genreDelete,
    genreGetById
};
