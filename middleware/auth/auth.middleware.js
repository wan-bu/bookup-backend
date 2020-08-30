const jwt = require("jsonwebtoken")
const config = require("config")

module.exports.signIn = async (req, res, next) => {
  const signInObject = { username: req.body.username, password: req.body.password }
  await User.findOne(signInObject).exec().then(user => {
    if (!user) {
      return res.status(401).json({
        message: 'authentication failed!'
      })
    }
    const token = jwt.sign(signInObject, config.get('jwt-private-key'), { expiresIn: config.get('jwt-expires-in') })
    return res.status(200).send({ value: token })
  }
  ).catch(err =>
    console.log(err)
  );
  next()
}