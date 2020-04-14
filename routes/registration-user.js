const router = require("express").Router();

const { registrationCheckSchema } = require("../validation/user-check-schemas");
const { createUser } = require("../controllers/users");

router.post("/", registrationCheckSchema, createUser);

module.exports = router;
