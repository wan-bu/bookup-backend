const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost/bookup", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to MongoDb...`))
    .catch((err) => console.log(err.message));
};
