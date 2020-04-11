const router = require("express").Router();

const auth = require("../middlewares/auth.js");
// const { idVerification } = require("../middlewares/idVerification.js");
const {
  createArticle,
  readArticle,
  // checkOwner,
  deleteArticle,
} = require("../controllers/articles");

const {
  articleCheckSchema,
  // articleIdSchema,
} = require("../validation/article-validation-celebrait");

router.use(auth);

router.post("/articles", articleCheckSchema, createArticle);
router.get("/articles", readArticle);
router.delete("/articles/:id", deleteArticle);

module.exports = router;
