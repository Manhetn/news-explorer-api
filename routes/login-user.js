const router = require("express").Router();

const { loginCheckSchema } = require("../validation/user-validation-celebrait");
const { loginUser } = require("../controllers/login-user");

router.post("/", loginCheckSchema, loginUser);

module.exports = router;
