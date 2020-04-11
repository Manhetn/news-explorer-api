const { Joi } = require("celebrate");

// схема текста
const textSchema = Joi.string().required();
// схема ссылки
const linkSchema = Joi.string().required().uri();
// схема id
const idSchema = Joi.string().alphanum().length(24);

module.exports = {
  textSchema,
  linkSchema,
  idSchema,
};
