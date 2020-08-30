const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  const url = config.get("dbUri");
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to MongoDb...`))
    .catch((err) => console.log("MongoError", err.message));
};
