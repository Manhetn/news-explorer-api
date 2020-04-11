const { Joi } = require("celebrate");

const { messages } = require("../utils/messages");

const emailSchema = Joi.string().required().email().messages({
  "string.empty": messages.user.email.empty,
  "string.email": messages.user.email.format,
});
// схема password
const passwordSchema = Joi.string().required().min(8).messages({
  "string.empty": messages.user.password.empty,
  "string.min": messages.user.password.minLength,
});
// схема name
const nameSchema = Joi.string().required().min(2).max(30).messages({
  "string.empty": messages.user.name.empty,
  "string.min": messages.user.name.minLength,
  "string.max": messages.user.name.maxLength,
});

module.exports = {
  emailSchema,
  passwordSchema,
  nameSchema,
};
