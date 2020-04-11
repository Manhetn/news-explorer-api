const jwt = require("jsonwebtoken");

const { secretKey } = require("../config/config");

const createToken = function (user) {
  return jwt.sign({ _id: user._id }, secretKey, { expiresIn: "7d" });
};

const verifyToken = function (token) {
  return jwt.verify(token, secretKey);
};

module.exports = {
  createToken,
  verifyToken,
};
