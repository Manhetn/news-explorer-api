const router = require("express").Router(); // создали роутер

const auth = require("../middlewares/auth.js");
// const { idVerification } = require("../middlewares/idVerification.js");
const {
  registrationCheckSchema,
  loginCheckSchema,
  // idCheckSchema,
} = require("../validation/user-validation-celebrait");

const { login, readUser, createUser } = require("../controllers/users");

router.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Сервер сейчас упадёт");
  }, 0);
});
router.post("/signin", loginCheckSchema, login);
router.post("/signup", registrationCheckSchema, createUser);
router.use(auth);
router.get("/users/me", readUser);

module.exports = router;
