const router = require("express").Router();

const { loginCheckSchema } = require("../validation/login-check-schema");
const { loginUser } = require("../controllers/login-user");

router.post("/", loginCheckSchema, loginUser);

module.exports = router;
