const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  users = await User.find();
  res.send(users);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  console.log(validate(req.body));
  if (error) return res.status(400).send(error.details[0].message);

  console.log(errors);

  user = await new User(req.body);

  user.save();
  res.send(user);
});

module.exports = router;
