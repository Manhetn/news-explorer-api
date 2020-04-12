const Article = require("../models/article");

const NotFoundError = require("../errors/not-found-error"); // 404
const ForbiddenError = require("../errors/forbidden-error"); // 403

const { messages } = require("../utils/messages");

// удаляет статью по идентификатору
const deleteArticle = (req, res, next) => {
  Article.findById(req.params.id)
    .select("+owner")
    .orFail(new NotFoundError(messages.article.deleteArticle.noArticle))
    .then((article) => {
      if (!article.owner.equals(req.user._id)) {
        throw new ForbiddenError(messages.article.deleteArticle.notMyArticle);
      }
      return Article.deleteOne(article);
    })
    .then(() =>
      res.send({ message: messages.article.deleteArticle.positiveResponse })
    )
    .catch((err) => next(err));
};

module.exports = {
  deleteArticle,
};
