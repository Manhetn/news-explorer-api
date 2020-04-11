// const ConflictError = require("../errors/conflict-error"); // 409

const errorHandler = (error, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500

  const { statusCode = 500, message } = error;

  return res.status(statusCode).send({
    // проверяем статус и выставляем сообщение в зависимости от него
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
};

module.exports = errorHandler;
