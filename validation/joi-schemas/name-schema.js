const { Joi } = require("celebrate");

const { messages } = require("../../utils/messages");
// схема name
module.exports.nameSchema = Joi.string().required().min(2).max(30).messages({
  "any.required": messages.user.name.required,
  "string.empty": messages.user.name.empty,
  "string.min": messages.user.name.minLength,
  "string.max": messages.user.name.maxLength,
});
