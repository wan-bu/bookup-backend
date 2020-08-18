const mongoose = require("mongoose");

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
  })
);

module.exports = User;
