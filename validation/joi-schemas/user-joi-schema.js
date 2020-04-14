const { Joi } = require("celebrate");

const { messages } = require("../../utils/messages");
// схема email
module.exports.emailSchema = Joi.string().required().email().messages({
  "any.required": messages.user.email.required,
  "string.empty": messages.user.email.empty,
  "string.email": messages.user.email.format,
});
// схема password
module.exports.passwordSchema = Joi.string().required().min(8).messages({
  "any.required": messages.user.password.required,
  "string.empty": messages.user.password.empty,
  "string.min": messages.user.password.minLength,
});
// схема name
module.exports.nameSchema = Joi.string().required().min(2).max(30).messages({
  "any.required": messages.user.name.required,
  "string.empty": messages.user.name.empty,
  "string.min": messages.user.name.minLength,
  "string.max": messages.user.name.maxLength,
});
