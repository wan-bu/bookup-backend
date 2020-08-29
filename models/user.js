const mongoose = require("mongoose");
const config = require("config")
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

User = new mongoose.model(
  "User",
  mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: String,
    password: String,
    roles : {type:Array , enum:config.get('userRoles')}
  })
);
const validate = (user)=>{
  const schema = {
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      roles:Joi.string().validate(config.get('userRoles'))
      }
  return Joi.validate(user,schema, { abortEarly: false });
}

module.exports = User;
