const { celebrate, Joi } = require("celebrate");

const {
  emailSchema,
  passwordSchema,
  nameSchema,
} = require("./joi-schemas/user-joi-schema");

// схема проверки при создании пользователя
module.exports.registrationCheckSchema = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
    name: nameSchema,
  }),
});
// схема проверки данных при авторизации
module.exports.loginCheckSchema = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
});
