
const { Router } = require('express');
const { 
    characterGet,
    characterPost,
    characterPut,
    characterDelete, } = require('../controllers/characters.controller');

const router = Router();

router.get('/', characterGet );

router.post('/', characterPost );

router.put('/:id', characterPut );

router.delete('/:id', characterDelete );


module.exports = router; 