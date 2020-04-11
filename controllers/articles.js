const Article = require("../models/article");

// const BadRequestError = require("../errors/badRequestError"); // 400
const NotFoundError = require("../errors/notFoundError"); // 404
const ForbiddenError = require("../errors/forbiddenError"); // 403

const { messages } = require("../utils/messages");

// создаёт карточку
const createArticle = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) =>
      res.status(201).send({
        keyword: article.keyword,
        title: article.title,
        text: article.text,
        date: article.date,
        source: article.source,
        link: article.link,
        image: article.image,
      })
    )
    .catch((err) => next(err));
};
// получаем все статьи пользователя
const readArticle = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.status(200).send({ articles }))
    .catch((err) => next(err));
};
// удаляет статью по идентификатору
const deleteArticle = (req, res, next) => {
  Article.findById(req.params.id)
    .select("+owner")
    .orFail(() => new NotFoundError(messages.article.deleteArticle.noArticle))
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
  createArticle,
  readArticle,
  deleteArticle,
};
