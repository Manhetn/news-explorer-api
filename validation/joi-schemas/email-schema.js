const { Joi } = require("celebrate");

const { messages } = require("../../utils/messages");
// схема email
module.exports.emailSchema = Joi.string().required().email().messages({
  "any.required": messages.user.email.required,
  "string.empty": messages.user.email.empty,
  "string.email": messages.user.email.format,
});
