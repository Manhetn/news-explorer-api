const bcrypt = require("bcryptjs");

const User = require("../models/user");
const UnauthorizedError = require("../errors/unauthorized-error"); // 401
const ConflictError = require("../errors/conflict-error"); // 409
const { createToken } = require("../middlewares/token");
const { messages } = require("../utils/messages");
// создаёт пользователя
module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      email,
      password: `${hash}`,
      name,
    })
      .then((user) => {
        res.status(201).send({
          user: {
            email: user.email,
            name: user.name,
          },
        });
      })
      .catch((error) => {
        if (email) {
          next(new ConflictError(`${error}`));
        } else {
          next(error);
        }
      });
  });
};
// login
module.exports.loginUser = (req, res, next) => {
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
// возвращает пользователя
module.exports.readUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      res.status(200).send({ name: user.name, email: user.email });
    })
    .catch((error) => next(error));
};
