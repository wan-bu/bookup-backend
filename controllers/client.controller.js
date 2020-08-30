const Joi = require('joi');
const {Client, validate} = require('../models/client.model');



module.exports = {
  findAll,save
}
async function findAll() {
  return await Client.find();
}
async function save(client) {
    return await new Client(client).save();
}

