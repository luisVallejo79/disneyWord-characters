const { request, response } = require('express');
const Movie = require('../models/movie.model');

const moviesGet = async( req = request, res = response) =>{ 
    
    const movie = await Movie.find( { status : true});
    res.json({
        msn : 'Get Api from controller movie',
        movie,

    })
}
const moviesGetById = async( req = request, res = response) =>{
    const id = req.params.id;
    const movie = await Movie.findById(id);
    res.json({
        msn : 'Get By Id Api from controller movie',
        movie
    })
}

const moviesPost = async( req, res = response) =>{

    const {image, title, creationDate, rating, charactersAssociated }  = req.body; 
    const movieData = await Movie.findOne({title :  title})

    if (movieData) {
        return res.json({
            msn : `${title} is already in the database`
        })
    }

    if (rating < 1 || rating > 5 ) {
        return res.json({
            msn : "rating must be between 1 and 5"
        });
    }
    
    const movie = new Movie({image, title, creationDate, rating, charactersAssociated });
    await movie.save();

    res.json({
        msn : 'Post Api from controller movie',
        movie
    })
}
const moviesPut = async( req, res = response) =>{
    const id = req.params.id;
    const {_id, ...rest} = req.body;
    const movieUpdate = await Movie.findByIdAndUpdate(id, rest);
    res.json({
        msn : 'Put Api from controller movie',
        movieUpdate
    })
}
const moviesDelete = async( req, res = response) =>{
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate( id, { status: false } );
    res.json({
        msn : 'Delete Api from controller movie',
        movie
    })
}

module.exports = {
    moviesGet,
    moviesPost,
    moviesPut,
    moviesDelete,
    moviesGetById
};
