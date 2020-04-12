const User = require("../models/user");

const UnauthorizedError = require("../errors/unauthorized-error"); // 401

const { createToken } = require("../middlewares/token");
const { messages } = require("../utils/messages");

// login
const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = createToken(user);
      res.cookie("token", token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });
      res
        .status(200)
        .send({ message: messages.authorization.positiveResponse });
    })
    .catch((error) => {
      next(new UnauthorizedError(`${error.message}`));
    });
};

module.exports = {
  loginUser,
};
