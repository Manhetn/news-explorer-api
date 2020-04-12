const router = require("express").Router();

const {
  articleIdSchema,
} = require("../validation/article-validation-celebrait");
const { deleteArticle } = require("../controllers/delete-article");

router.delete("/:id", articleIdSchema, deleteArticle);

module.exports = router;
