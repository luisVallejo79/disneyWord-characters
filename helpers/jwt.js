const jwt = require('jsonwebtoken');

const generateJWT = ( _id, name ) =>{
    return new Promise( (resolve, reject) =>{
        const payLoad = { _id, name };
        jwt.sign(payLoad, process.env.JWT_ACCOUNT_ACTIVATION, {
            expiresIn : "6h"
        }, (err, token) =>{
            if (err) {
                reject('error generating JWT')
            } else {
                resolve( token )
            }
        } );
    })
}

module.exports = {
    generateJWT
}