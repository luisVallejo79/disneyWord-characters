
const { Router } = require('express');
const { 
    moviesGet,
    moviesPost,
    moviesPut,
    moviesDelete,
    moviesGetById, } = require('../controllers/movie.controller');

const router = Router();

router.get('/', moviesGet );

router.get('/:id', moviesGetById );

router.post('/', moviesPost );

router.put('/:id', moviesPut );

router.delete('/:id', moviesDelete );


module.exports = router; 