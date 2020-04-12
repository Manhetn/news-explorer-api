const router = require("express").Router();

const { readUser } = require("../controllers/read-user");

router.get("/me", readUser);

module.exports = router;
