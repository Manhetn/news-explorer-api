const { verifyToken } = require("./token");
const { messages } = require("../utils/messages");
const UnauthorizedError = require("../errors/unauthorized-error"); // 401

const auth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(
      new UnauthorizedError(messages.authorization.needAuthorization)
    );
  }
  let payload;
  try {
    payload = verifyToken(token);
  } catch (error) {
    return next(new UnauthorizedError(messages.authorization.badToken));
  }
  req.user = payload;
  return next();
};

module.exports = auth;
