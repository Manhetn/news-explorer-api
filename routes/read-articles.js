const router = require("express").Router();

const { readArticle } = require("../controllers/read-articles");

router.get("/", readArticle);

module.exports = router;
