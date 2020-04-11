require("dotenv").config();

const {
  NODE_ENV,
  JWT_SECRET,
  PORT = 3000,
  DATABASE_URL = "mongodb://localhost:27017/newsdb",
} = process.env;
// Опции для mongoose, что бы обойти ошибки в связи с обновлением
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
// DATABASE: NODE_ENV === 'production' ? MONGODB : 'mongodb://localhost:27017/portfolio',

const secretKey = NODE_ENV === "production" ? JWT_SECRET : "secret-key";

module.exports = {
  secretKey,
  PORT,
  DATABASE_URL,
  mongooseOptions,
};
