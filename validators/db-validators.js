const User = require('../models/user.model');

const findUserById = async( id ) =>{
    //console.log("Entro findUser");
    const findUser = await User.findById( id );
    if (!findUser) {
        throw new Error(`Id ${id} not registered in database`);
    }
}
const findEmail = async( email ) =>{
    console.log("Entro findEmail");
    //validate email exist
    const findEmail = await User.findOne( {email} );
    if (findEmail) {
        throw new Error(`${email} registered in database`);
    }
}

module.exports = {
    findUserById,
    findEmail
}