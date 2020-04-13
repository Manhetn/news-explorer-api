const { celebrate, Joi } = require("celebrate");

const { emailSchema } = require("./joi-schemas/email-schema");
const { passwordSchema } = require("./joi-schemas/password-schema");
// схема проверки данных при авторизации
module.exports.loginCheckSchema = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
});
