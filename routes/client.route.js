const Joi = require('joi');
const express = require("express");
const router = express.Router();
const {joiValidate} = require('../middleware/validators/client.middleware');
const clientController = require("../controllers/client.controller")

router.get("/", async (req, res) => {
  res.send(await clientController.findAll());
});

router.post("/",joiValidate, async (req, res) => {
  res.send(await clientController.save(req.body));
});

module.exports = router;
