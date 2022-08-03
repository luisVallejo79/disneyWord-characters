const { response } = require('express');

const characterGet = ( req, res = response) =>{
    res.json({
        msn : 'Get Api from controller'
    })
}
const characterPost = ( req, res = response) =>{
    res.json({
        msn : 'Post Api from controller'
    })
}
const characterPut = ( req, res = response) =>{
    res.json({
        msn : 'Put Api from controller'
    })
}
const characterDelete = ( req, res = response) =>{
    res.json({
        msn : 'Delete Api from controller'
    })
}

module.exports = {
    characterGet,
    characterPost,
    characterPut,
    characterDelete,
};
