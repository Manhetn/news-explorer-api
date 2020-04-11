const router = require("express").Router();

// const auth = require("../middlewares/auth");
// const {
//   registrationCheckSchema,
//   loginCheckSchema,
// } = require("../validation/user-validation-celebrait");
// const { login, readUser, createUser } = require("../controllers/users");
const { readUser } = require("../controllers/users");

// router.post("/signup", registrationCheckSchema, createUser);
// router.post("/signin", loginCheckSchema, login);
// router.use(auth);
// router.get("/users/me", readUser);

router.get("/me", readUser);

module.exports = router;
