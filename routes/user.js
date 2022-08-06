
const { Router } = require('express');
const { check } = require('express-validator');
const { 
    userGet,
    userPost,
    userPut,
    userDelete, } = require('../controllers/user.controller');
const { validateField } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');
const { findUserById, findEmail } = require('../validators/db-validators');

const router = Router();

router.get('/', userGet );

router.post('/', [
    check('email', 'Format Email not valid').isEmail(),
    check('name', 'Name is required').notEmpty(),
    check('email').custom( findEmail),
    check('password', 'password must be greater than 5 characters').isLength( {min: 5}),
    validateField], userPost );

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    check('id').custom( findUserById ),
    validateField], userPut );

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    check('id').custom( findUserById ),
    validateField], userDelete );


module.exports = router; 