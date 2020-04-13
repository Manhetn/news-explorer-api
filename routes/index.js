const { errors } = require("celebrate");
const helmet = require("helmet");
const router = require("express").Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const limiter = require("../middlewares/limiter");
const { requestLogger } = require("../middlewares/request-logger");
const registration = require("./registration-user");
const login = require("./login-user");
const { auth } = require("../middlewares/auth");
const readUser = require("./read-user");
const creatAarticle = require("./create-article");
const readArticles = require("./read-articles");
const deleteArticle = require("./delete-article");
const pathInvalid = require("./path-invalid ");
const { errorLogger } = require("../middlewares/error-logger");
const { errorHandler } = require("../middlewares/error-handler");

router.use(helmet());
router.use(bodyParser.json());
router.use(cookieParser());

router.use(limiter);
router.use(requestLogger);

router.use("/signup", registration);
router.use("/signin", login);
router.use(auth);
router.use("/users", readUser);
router.use("/articles", creatAarticle);
router.use("/articles", readArticles);
router.use("/articles", deleteArticle);
router.use("*", pathInvalid);

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
