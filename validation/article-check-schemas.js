const { celebrate, Joi } = require("celebrate");

const { messages } = require("../utils/messages");
const {
  textSchema,
  linkSchema,
  idSchema,
} = require("./joi-schemas/article-joi-schema");
// схема проверки данных стаьти
module.exports.articleCheckSchema = celebrate({
  body: Joi.object().keys({
    keyword: textSchema.min(2).max(30).messages({
      "any.required": messages.article.keyword.required,
      "string.empty": messages.article.keyword.empty,
      "string.min": messages.article.keyword.minLength,
      "string.max": messages.article.keyword.maxLength,
    }),
    title: textSchema.min(2).max(150).messages({
      "any.required": messages.article.title.required,
      "string.empty": messages.article.title.empty,
      "string.min": messages.article.title.minLength,
      "string.max": messages.article.title.maxLength,
    }),
    text: textSchema.min(2).messages({
      "any.required": messages.article.text.required,
      "string.empty": messages.article.text.empty,
      "string.min": messages.article.text.minLength,
    }),
    date: textSchema.min(8).max(30).messages({
      "any.required": messages.article.date.required,
      "string.empty": messages.article.date.empty,
      "string.min": messages.article.date.minLength,
      "string.max": messages.article.date.maxLength,
    }),
    source: textSchema.min(2).max(30).messages({
      "any.required": messages.article.source.required,
      "string.empty": messages.article.source.empty,
      "string.min": messages.article.source.minLength,
    }),
    link: linkSchema.messages({
      "any.required": messages.article.link.required,
      "string.empty": messages.article.link.empty,
      "string.uri": messages.article.link.uri,
    }),
    image: linkSchema.messages({
      "any.required": messages.article.image.required,
      "string.empty": messages.article.image.empty,
      "string.uri": messages.article.image.uri,
    }),
    owner: idSchema.messages({
      "any.required": messages.article.owner.required,
      "string.empty": messages.article.owner.empty,
      "string.length": messages.article.owner.length,
    }),
  }),
});
// схема проверки id стаьти
module.exports.articleIdSchema = celebrate({
  params: Joi.object().keys({
    id: idSchema.messages({ "string.length": messages.article.id.length }),
  }),
});
