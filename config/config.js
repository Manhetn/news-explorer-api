require("dotenv").config();

const { NODE_ENV, JWT_SECRET, PORT, DATABASE } = process.env;

const secretKey = NODE_ENV === "production" ? JWT_SECRET : "secret-key";
const port = NODE_ENV === "production" ? PORT : 8080;
const dataBase =
  NODE_ENV === "production" ? DATABASE : "mongodb://localhost:27017/newsdb";
//  для предотвращения ошибок mongoose, после обновления
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

module.exports = {
  secretKey,
  port,
  dataBase,
  mongooseOptions,
};
