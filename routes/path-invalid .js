const router = require("express").Router();

const NotFoundError = require("../errors/not-found-error"); // 404
const { messages } = require("../utils/messages");

router.all("*", (req, res, next) =>
  next(new NotFoundError(messages.path.invalid))
);

module.exports = router;
