// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { errors } = require("celebrate");

const { DATABASE_URL, PORT } = require("./config/config");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const users = require("./routes/users");
const articles = require("./routes/articles");
const pathInvalid = require("./routes/path-invalid ");

const errorHandler = require("./middlewares/error-handler");

const app = express();

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());

app.use(requestLogger);
app.use(users);
app.use(articles);
app.use(pathInvalid);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
