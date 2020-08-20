const Joi = require('joi');
const {Workhour, validate} = require('../models/workhour.model');



module.exports = {
  insert
}

async function insert(workhour) {
    workhour = validate(workhour);
    return await new Workhour(workhour).save();
}

// async function update(workhour) {
//     workhour = validate(workhour);
//     return await new Workhour(workhour).save();
// }