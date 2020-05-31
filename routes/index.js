const { errors } = require("celebrate");
const helmet = require("helmet");
const router = require("express").Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const limiter = require("../middlewares/limiter");
const { requestLogger, errorLogger } = require("../middlewares/logger");
const registration = require("./registration-user");
const login = require("./login-user");
const { auth } = require("../middlewares/auth");
const readUser = require("./read-user");
const articles = require("./articles");
const pathInvalid = require("./path-invalid ");
const { errorHandler } = require("../middlewares/error-handler");
const cors = require("../middlewares/cors");

router.use(cors);
router.use(helmet());
router.use(bodyParser.json());
router.use(cookieParser());

router.use(limiter);
router.use(requestLogger);

router.use("/signup", registration);
router.use("/signin", login);
router.use(auth);
router.use("/users", readUser);
router.use("/articles", articles);
router.use("*", pathInvalid);

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
