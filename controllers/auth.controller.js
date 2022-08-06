const { response } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { generateJWT } = require("../helpers/jwt");


const login = async(req, res= response) =>{
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                msn : "Email not found"
            })
        }
        if (user.status == false) {
            return res.status(401).json({
                msn : "User invalid - status false"
            })
        }
        const verifyPassword = bcrypt.compareSync(password, user.password);
        if (!verifyPassword) {
            return res.status(401).json({
                msn : "Invalid Password"
            })
        }
        const token = await generateJWT( user.id );
        res.json({
            user,
            token
        })


    } catch (error) {
        res.status(500).json({
            msn: "Database Error"
        })


        
    }


    }

module.exports = {
    login
}