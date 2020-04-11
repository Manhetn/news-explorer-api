const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const helmet = require("helmet");
// const { errors } = require("celebrate");
const routers = require("./routes/index");

const { DATABASE_URL, PORT, mongooseOptions } = require("./config/config");
// const { requestLogger, errorLogger } = require("./middlewares/logger");
// const users = require("./routes/users");
// const articles = require("./routes/articles");
// const pathInvalid = require("./routes/path-invalid ");
// const limiter = require("./middlewares/limiter");
// const errorHandler = require("./middlewares/error-handler");

const app = express();

mongoose.connect(DATABASE_URL, mongooseOptions);

app.use(routers);

// app.use(limiter);
// app.use(helmet());
// app.use(bodyParser.json());
// app.use(cookieParser());

// app.use(requestLogger);

// app.use(users);
// app.use(articles);
// app.use(pathInvalid);

// app.use(errorLogger);
// app.use(errors());
// app.use(errorHandler);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.info(`App listening on port ${PORT}`);
});
