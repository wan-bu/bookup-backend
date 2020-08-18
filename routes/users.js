const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  user = await new User(req.body);

  user.save();
  res.send(user);
});

module.exports = router;
