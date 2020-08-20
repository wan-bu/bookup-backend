const Joi = require('joi');
const {Activity} = require('../models/activity.model');
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  activity = await Activity.find();
  res.send(activity);
});

router.post("/", async (req, res) => {
  const activity = new Activity(req.body)
  activity.save()
  res.send(activity)
});

module.exports = router;
