
const { Router } = require('express');
const { 
    genreGet,
    genrePost,
    genrePut,
    genreDelete,
    genreGetById, } = require('../controllers/genre.controller');

const router = Router();

router.get('/', genreGet );

router.get('/:id', genreGetById );

router.post('/', genrePost );

router.put('/:id', genrePut );

router.delete('/:id', genreDelete );


module.exports = router; 