const { Joi } = require("celebrate");
// схема текста
module.exports.textSchema = Joi.string().required();
