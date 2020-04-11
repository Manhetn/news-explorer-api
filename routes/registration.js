const router = require("express").Router();

const {
  registrationCheckSchema,
} = require("../validation/user-validation-celebrait");
const { createUser } = require("../controllers/users");

router.post("/", registrationCheckSchema, createUser);

module.exports = router;
