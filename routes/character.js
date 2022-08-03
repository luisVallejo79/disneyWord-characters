
const { Router } = require('express');
const { 
    characterGet,
    characterPost,
    characterPut,
    characterDelete, } = require('../controllers/characters.controller');

const router = Router();

router.get('/', characterGet );

router.post('/', characterPost );

router.put('/', characterPut );

router.delete('/', characterDelete );


module.exports = router; 