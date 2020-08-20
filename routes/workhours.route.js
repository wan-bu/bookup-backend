const Joi = require('joi');
const {Workhour, validate} = require('../models/workhour.model');
const express = require("express");
const workhourController = require("../controllers/workhour.controller")
const router = express.Router();

router.get("/", async (req, res) => {
  workhour = await Workhour.find();
  res.send(workhour);
});

router.post("/", async (req, res) => {
  const {error} = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  console.log(validate(req.body).error)

  const wh = new Workhour(req.body)

  wh.save()
  res.send(wh)
  // res.send(workhourController.insert(req.body));
});

module.exports = router;
