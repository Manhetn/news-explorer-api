const User = require("../models/user");
// возвращает пользователя
module.exports.readUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      res.status(200).send({ name: user.name, email: user.email });
    })
    .catch((error) => next(error));
};
