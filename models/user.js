const mongoose = require("mongoose");
const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

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
    roles: {
      type: [String],
      enum: config.get("userRoles"),
      required: true,
    },
  })
);
const validate = (user) => {
  const schema = {
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    roles: Joi.array()
      .items(Joi.string().valid(config.get("userRoles")).required())
      .required(),
  };
  return Joi.validate(user, schema);
};

module.exports.User = User;
module.exports.validate = validate;
