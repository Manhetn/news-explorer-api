const UnauthorizedError = require("../errors/unauthorized-error"); // 401
const { verifyToken } = require("./token");
const { messages } = require("../utils/messages");
// Авторизация
module.exports.auth = (req, res, next) => {
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
