const { celebrate, Joi } = require("celebrate");

const { emailSchema } = require("./joi-schemas/email-schema");
const { passwordSchema } = require("./joi-schemas/password-schema");
const { nameSchema } = require("./joi-schemas/name-schema");
// схема проверки при создании пользователя
module.exports.registrationCheckSchema = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
    name: nameSchema,
  }),
});
