const mongoose = require("mongoose");

const workhourSchema = new mongoose.Schema({
    startTime: {
        type: Date,
        required: true
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

Workhour = new mongoose.model(
    "Workhour", workhourSchema);

module.exports = Workhour;
