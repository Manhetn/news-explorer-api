const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routers = require("./routes/index");

const { dataBase, port, mongooseOptions } = require("./config/config");

const app = express();

mongoose.connect(dataBase, mongooseOptions);

app.use(
  cors({
    origin: ["https://interesting-news.tk"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(routers);

app.listen(port, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.info(`App listening on port ${port}`);
});
