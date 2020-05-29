const router = require("express").Router();

const {
  articleCheckSchema,
  articleIdSchema,
} = require("../validation/article-check-schemas");
const {
  createArticle,
  deleteArticle,
  readArticle,
} = require("../controllers/articles");

router.get("/", readArticle);
router.post("/", articleCheckSchema, createArticle);
router.delete("/:id", articleIdSchema, deleteArticle);

module.exports = router;
