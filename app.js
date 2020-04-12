const express = require("express");
const mongoose = require("mongoose");
const routers = require("./routes/index");

const { DATABASE_URL, PORT, mongooseOptions } = require("./config/config");

const app = express();

mongoose.connect(DATABASE_URL, mongooseOptions);

app.use(routers);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.info(`App listening on port ${PORT}`);
});
