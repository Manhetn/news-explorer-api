const { Joi } = require("celebrate");
// схема ссылки
module.exports.linkSchema = Joi.string().required().uri();
