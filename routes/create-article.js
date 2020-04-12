const router = require("express").Router();

const {
  articleCheckSchema,
} = require("../validation/article-validation-celebrait");
const { createArticle } = require("../controllers/create-article");

router.post("/", articleCheckSchema, createArticle);

module.exports = router;
