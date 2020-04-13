const router = require("express").Router();

const {
  registrationCheckSchema,
} = require("../validation/registration-check-schema");
const { createUser } = require("../controllers/create-user");

router.post("/", registrationCheckSchema, createUser);

module.exports = router;
