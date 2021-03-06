const test = require("../routes/test");
const users = require("../routes/users");
const workhours = require("../routes/workhours.route");
const activities = require("../routes/activities.route");
const clients = require("../routes/client.route")
const auth = require("../routes/auth.route")
const express = require("express");
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

module.exports = (app) => {
  app.use(express.json());
  app.use("/test", test);
  app.use("/users", users);
  app.use("/workhours", workhours);
  app.use("/activities", activities);
  app.use("/clients", clients);
  app.use("/auth", auth);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};




