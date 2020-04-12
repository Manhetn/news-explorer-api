const router = require("express").Router();

const {
  registrationCheckSchema,
} = require("../validation/user-validation-celebrait");
const { createUser } = require("../controllers/create-user");

router.post("/", registrationCheckSchema, createUser);

module.exports = router;
