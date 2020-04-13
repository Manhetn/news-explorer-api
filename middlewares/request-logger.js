const winston = require("winston");
const expressWinston = require("express-winston");
// логер запросов
module.exports.requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  format: winston.format.json(),
});
