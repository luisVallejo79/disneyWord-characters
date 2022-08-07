
const { Router } = require('express');
const { 
    moviesGet,
    moviesPost,
    moviesPut,
    moviesDelete,
    moviesGetById, } = require('../controllers/movie.controller');
const { check } = require('express-validator');
const { validateField } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.get('/',[
    validateJWT
], moviesGet );

router.get('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], moviesGetById );

router.post('/',[
    validateJWT,
    check('image', 'Image is required').notEmpty(),
    check('title', 'Title is required').notEmpty(),
    check('rating', 'Rating is required').notEmpty(),
    check('charactersAssociated', 'Characters Associated is required').notEmpty(),
    validateField
], moviesPost );

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], moviesPut );

router.delete('/:id',[
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], moviesDelete );


module.exports = router; 