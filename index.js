const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

require("./startup/routes")(app);
require("./startup/db")();

app.listen(process.env.PORT || 5000, () => console.log(`Listening on port 5000`));
