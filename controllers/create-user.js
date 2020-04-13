const bcrypt = require("bcryptjs");

const User = require("../models/user");
const ConflictError = require("../errors/conflict-error"); // 409
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
