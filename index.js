const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("./startup/routes")(app);
require("./startup/db")();

app.listen("5000", () => console.log(`Listening on port 5000`));
