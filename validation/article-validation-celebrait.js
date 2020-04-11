const { celebrate, Joi } = require("celebrate");
const { messages } = require("../utils/messages");

const { textSchema, linkSchema, idSchema } = require("./article-joi-schemas");

const articleCheckSchema = celebrate({
  body: Joi.object().keys({
    keyword: textSchema.min(2).max(30).messages({
      "string.empty": messages.article.keyword.empty,
      "string.min": messages.article.keyword.minLength,
      "string.max": messages.article.keyword.maxLength,
    }),
    title: textSchema.min(2).max(150).messages({
      "string.empty": messages.article.title.empty,
      "string.min": messages.article.title.minLength,
      "string.max": messages.article.title.maxLength,
    }),
    text: textSchema.min(2).messages({
      "string.empty": messages.article.text.empty,
      "string.min": messages.article.text.minLength,
    }),
    date: textSchema.min(8).max(30).messages({
      "string.empty": messages.article.date.empty,
      "string.min": messages.article.date.minLength,
      "string.max": messages.article.date.maxLength,
    }),
    source: textSchema.min(2).max(30).messages({
      "string.empty": messages.article.source.empty,
      "string.min": messages.article.source.minLength,
    }),
    link: linkSchema.messages({
      "string.empty": messages.article.link.empty,
      "string.uri": messages.article.link.uri,
    }),
    image: linkSchema.messages({
      "string.empty": messages.article.image.empty,
      "string.uri": messages.article.image.uri,
    }),
    owner: idSchema.messages({
      "string.empty": messages.article.owner.empty,
      "string.length": messages.article.owner.length,
    }),
  }),
});

const articleIdSchema = celebrate({
  params: Joi.object().keys({
    id: idSchema.messages({ "string.length": messages.article.id.length }),
  }),
});

module.exports = {
  articleCheckSchema,
  articleIdSchema,
};
