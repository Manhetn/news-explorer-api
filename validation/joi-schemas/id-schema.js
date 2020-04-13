const { Joi } = require("celebrate");
// схема id
module.exports.idSchema = Joi.string().alphanum().length(24);
