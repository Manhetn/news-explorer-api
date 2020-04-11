const { errors } = require("celebrate");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const router = require("express").Router();

const registration = require("./registration");
const login = require("./login");
const users = require("./users");
const articles = require("./articles");
const pathInvalid = require("./path-invalid ");
const auth = require("../middlewares/auth");
const errorHandler = require("../middlewares/error-handler");
const { requestLogger, errorLogger } = require("../middlewares/logger");
const limiter = require("../middlewares/limiter");

router.use(helmet());
router.use(bodyParser.json());
router.use(cookieParser());

router.use(limiter);
router.use(requestLogger);
router.use("/signup", registration);
router.use("/signin", login);
router.use(auth);
router.use("/users", users);
router.use("/articles", articles);
router.use("*", pathInvalid);

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
