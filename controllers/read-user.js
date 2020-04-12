const User = require("../models/user");

// возвращает пользователя
const readUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      res.status(200).send({ name: user.name, email: user.email });
    })
    .catch((error) => next(error));
};

module.exports = {
  readUser,
};
