
const { Router } = require('express');
const { 
    characterGet,
    characterPost,
    characterPut,
    characterDelete,
    characterGetById, } = require('../controllers/characters.controller');
    const { check } = require('express-validator');
    const { validateField } = require('../middlewares/validateFields');
    const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.get('/', [validateJWT], characterGet );

router.get('/:id',[
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], characterGetById );

router.post('/', [
    check('name', 'Name is required').notEmpty(),
    check('age', 'age is required').notEmpty(),
    check('weight', 'weight is required').notEmpty(),

    validateField], characterPost );

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField], characterPut );

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid MongoId').isMongoId(),
    validateField
], characterDelete );


module.exports = router; 