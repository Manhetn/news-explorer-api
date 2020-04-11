require("dotenv").config();

const {
  NODE_ENV,
  JWT_SECRET,
  PORT = 3000,
  DATABASE_URL = "mongodb://localhost:27017/newsdb",
} = process.env;

const secretKey = NODE_ENV === "production" ? JWT_SECRET : "secret-key";

module.exports = {
  secretKey,
  PORT,
  DATABASE_URL,
};
