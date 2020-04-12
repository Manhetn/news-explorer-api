const Article = require("../models/article");

// получаем все статьи пользователя
const readArticle = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.status(200).send({ articles }))
    .catch((err) => next(err));
};

module.exports = {
  readArticle,
};
