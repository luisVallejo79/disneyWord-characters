const { response, request } = require('express');
const Character = require('../models/character.model');
const Movie = require('../models/movie.model');

const allowedCollections = [
    'character', 'movie'
];
const searchCharacters = async(term, res=response) => {

    const regex = new RegExp(term, ('i'));

    const characterFinds = await Character.find( {
        $or: [{name : regex}],
        $and:  [{status : true}]
     });
    return res.json({
        results : characterFinds
        //results: (characterSearches) ? [characterSearches] : []
})

}

const searchMovies = async(term, res=response) => {

    const regex = new RegExp(term, ('i'));

    const searchMovies = await Movie.find( { 
        $or:  [{title : regex}, {age : term}],
        $and: [{status : true}]
});

    return res.json({
        results : searchMovies
        //results: (characterSearches) ? [characterSearches] : []
})

}

const search = (req = request, res = response) =>{

    const {collection, term} = req.params;

    if (!allowedCollections.includes(collection)) {
        return res.status(400).json({
            msn : `Collections ${collection} not allowed, collections allowed for searches are ${allowedCollections}`
        })
    }

    switch (collection) {
        case 'character':
            searchCharacters(term, res);
            break;
        case 'movie':
            searchMovies(term, res);
            break;
        default:
            res.json({
                msn : 'Does not fit the search terms'
            })
            break;
    }
}

module.exports = {
    search
}