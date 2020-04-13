const { messages } = require("../utils/messages");
// централизованный обработчик ошибок
module.exports.errorHandler = (error, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = 500, message } = error;
  return res.status(statusCode).send({
    // проверяем статус и выставляем сообщение в зависимости от него
    message: statusCode === 500 ? messages.errorServer : message,
  });
};
