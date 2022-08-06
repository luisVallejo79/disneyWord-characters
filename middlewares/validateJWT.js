
const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) =>{
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            msn : "No token in the request"
        });
    }
    try {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION);
        next();
        
    } catch (error) {
        res.status(401).json({
            msn : "JWT invalid"
        });
    }

}

module.exports = {
    validateJWT
}