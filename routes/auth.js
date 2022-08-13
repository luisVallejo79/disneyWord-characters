const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSingIn } = require('../controllers/auth.controller');
const { validateField } = require('../middlewares/validateFields');


const router = Router();

router.post('/login',[
    check('email', 'Email is required').notEmpty(),
    check('password', 'password is required').notEmpty(),
    validateField], login );

router.post('/google',[
    check('id_token', 'Id token it is necessary').notEmpty(),
    validateField], googleSingIn );



module.exports = router; 