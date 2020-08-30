const Joi = require("joi");
const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { validateClient } = require("../models/client.model");
const clientController = require("../controllers/client.controller");

router.get("/", async (req, res) => {
  res.send(await clientController.findAll());
});

router.post("/", validate(validateClient), async (req, res) => {
  res.send(await clientController.save(req.body));
});

module.exports = router;
