const test = require("../routes/test");
const users = require("../routes/users");
const express = require("express");

module.exports = (app) => {
  app.use(express.json());
  app.use("/test", test);
  app.use("/users", users);
};
