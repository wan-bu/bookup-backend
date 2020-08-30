const Joi = require('joi');
const express = require("express");
const router = express.Router();
const {signIn} = require("../middleware/auth/auth.middleware")


router.post("/sign-in", signIn);

module.exports = router;
