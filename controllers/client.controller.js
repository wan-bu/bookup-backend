const Joi = require('joi');
const { Client, validate } = require('../models/client.model');
const { elasticsearchAgent } = require('../config/elasticsearch.config')

module.exports = {
  findAll, save, searchClients
}

async function searchClients() {
  const { body } = await elasticsearchAgent.search({
    index: 'clients',
    body: {
      query: {
        match: { firstname: "marouane" }
      }
    }
  })
  return body['hits']['hits'][0]['_source'];
}

async function findAll() {
  return await Client.find();
}
async function save(client) {
  return await new Client(client).save();
}

