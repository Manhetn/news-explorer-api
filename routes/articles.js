const router = require("express").Router();

// const auth = require("../middlewares/auth.js");
const {
  articleCheckSchema,
  articleIdSchema,
} = require("../validation/article-validation-celebrait");
const {
  createArticle,
  readArticle,
  deleteArticle,
} = require("../controllers/articles");

// router.use(auth);
router.post("/", articleCheckSchema, createArticle);
router.get("/", readArticle);
router.delete("/:id", articleIdSchema, deleteArticle);

module.exports = router;
