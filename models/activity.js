const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    minDuration: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

Activity = new mongoose.model("Activity", activitySchema);

module.exports = Activity;
