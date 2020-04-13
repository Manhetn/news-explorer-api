const { Joi } = require("celebrate");

const { messages } = require("../../utils/messages");
// схема password
module.exports.passwordSchema = Joi.string().required().min(8).messages({
  "any.required": messages.user.password.required,
  "string.empty": messages.user.password.empty,
  "string.min": messages.user.password.minLength,
});
