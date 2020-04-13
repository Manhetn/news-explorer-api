const winston = require("winston");
const expressWinston = require("express-winston");
// логгер ошибок
module.exports.errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  format: winston.format.json(),
});
