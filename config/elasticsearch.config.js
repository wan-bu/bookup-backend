const config = require("config");
const { Client } = require('@elastic/elasticsearch')


const elasticsearchAgent = new Client({
  cloud: {
    id: config.get('elasticCloudID')
  },
  auth: {
    username: config.get('elasticCloudUsername'),
    password: config.get('elasticCloudPassword')
  }
})

module.exports = {
  elasticsearchAgent
}