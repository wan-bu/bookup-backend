const mongoose = require("mongoose");
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const workhourSchema = new mongoose.Schema({
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true
    },
    dayOfWeek: {
        type: String,
        required: true
    },
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }
});

const validate = (workhour)=>{
    const schema = {
        startTime: Joi.string().required(),
        endTime: Joi.string().required(),
        dayOfWeek: Joi.string().required(),
        }
    return Joi.validate(workhour,schema, { abortEarly: false });
}

Workhour = new mongoose.model(
    "Workhour", workhourSchema);
module.exports.Workhour = Workhour;
module.exports.validate = validate;
