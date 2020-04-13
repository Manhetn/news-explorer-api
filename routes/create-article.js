const router = require("express").Router();

const { articleCheckSchema } = require("../validation/article-check-schema");
const { createArticle } = require("../controllers/create-article");

router.post("/", articleCheckSchema, createArticle);

module.exports = router;
