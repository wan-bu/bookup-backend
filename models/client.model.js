const mongoose = require("mongoose");
const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

Client = new mongoose.model(
  "Client",
  mongoose.Schema({
    firstname: {
      type: String,
      required: true,
      maxlength: 50,
    },
    lastname: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  })
);
const validate = (client) => {
  const schema = {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required()
  };
  return Joi.validate(client, schema);
};

module.exports.Client = Client;
module.exports.validate = validate;
