const { request, response } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const userGet = async(req = request, res = response) => {
  
  const users = await User.find( { status : true});
  const total = await User.count({ status : true});
  res.json({
    total,
    users
  });
};
const userPost = async (req, res = response) => {

  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  //validar email existe
  const emailTrue = await User.findOne({
    email: email,
  });

  if (emailTrue) {
    return res.status(400).json({
      msg: "This email is already registered",
    });
  }

  //encriptar password
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password, salt);
  await user.save();
  res.json({
    user,
  });
};
const userPut = async (req, res = response) => {
  const {id} = req.params;
  const {_id, email, password, ...rest} = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync(10);
    rest.password = bcrypt.hashSync(password, salt);
  } 
  const userUpdated = await User.findByIdAndUpdate(id, rest);
    res.json({userUpdated});
};

const userDelete = async(req, res = response) => {
  const { id } = req.params;

  //const user = await User.findByIdAndRemove(id); borrado permante de la base de datos
  const user = await User.findByIdAndUpdate(id, { status : false})
  res.json({
    id,
    user
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
