const { Joi } = require("celebrate");
// схема id
module.exports.idSchema = Joi.string().alphanum().length(24);
// схема текста
module.exports.textSchema = Joi.string().required();
// схема ссылки
module.exports.linkSchema = Joi.string().required().uri();
