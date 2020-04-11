const router = require("express").Router();

const { loginCheckSchema } = require("../validation/user-validation-celebrait");
const { login } = require("../controllers/users");

router.post("/", loginCheckSchema, login);

module.exports = router;
