const router = require("express").Router();

const { loginCheckSchema } = require("../validation/user-check-schemas");
const { loginUser } = require("../controllers/users");

router.post("/", loginCheckSchema, loginUser);

module.exports = router;
