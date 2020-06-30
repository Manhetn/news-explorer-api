const Article = require("../models/article");
const NotFoundError = require("../errors/not-found-error"); // 404
const ForbiddenError = require("../errors/forbidden-error"); // 403
const { messages } = require("../utils/messages");
// создаём статью
module.exports.createArticle = (req, res, next) => {
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
        statusCode: "201",
        data: {
          keyword: article.keyword,
          title: article.title,
          text: article.text,
          date: article.date,
          source: article.source,
          link: article.link,
          image: article.image,
        },
      })
    )
    .catch((err) => next(err));
};
// получаем все статьи пользователя
module.exports.readArticle = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.status(200).send({ statusCode: "200", articles }))
    .catch((err) => next(err));
};
// удаляет статью по идентификатору
module.exports.deleteArticle = (req, res, next) => {
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
      res.send({
        statusCode: "200",
        message: messages.article.deleteArticle.positiveResponse,
      })
    )
    .catch((err) => next(err));
};
