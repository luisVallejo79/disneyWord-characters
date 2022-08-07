
const { Router } = require('express');
const { 
    genreGet,
    genrePost,
    genrePut,
    genreDelete,
    genreGetById, } = require('../controllers/genre.controller');
const { check } = require('express-validator');
const { validateField } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.get('/', [validateJWT], genreGet );

router.get('/:id',[
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField], genreGetById );

router.post('/',[
    validateJWT,
    check('name', 'Name is required').notEmpty(),
    check('image', 'image is required').notEmpty(),
    check('moviesAssociated', 'Movies Associated is required').notEmpty(),
    validateField], genrePost );

router.put('/:id',[
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], genrePut );

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], genreDelete );


module.exports = router; 