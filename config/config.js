require("dotenv").config();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const { NODE_ENV, JWT_SECRET, PORT, DATABASE } = process.env;

const dataBase =
  NODE_ENV === "production" ? DATABASE : "mongodb://localhost:27017/newsdb";
const secretKey = NODE_ENV === "production" ? JWT_SECRET : "secret-key";
const port = NODE_ENV === "production" ? PORT : 3000;

module.exports = {
  dataBase,
  port,
  secretKey,
  mongooseOptions,
};
