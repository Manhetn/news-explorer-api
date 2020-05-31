const express = require("express");
const mongoose = require("mongoose");

const routers = require("./routes/index");

const { dataBase, port, mongooseOptions } = require("./config/config");

const app = express();

mongoose.connect(dataBase, mongooseOptions);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://interesting-news.tk");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

  next();
});

app.use(routers);

app.listen(port, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.info(`App listening on port ${port}`);
});
