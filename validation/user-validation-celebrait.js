const { celebrate, Joi } = require("celebrate");

const {
  emailSchema,
  passwordSchema,
  nameSchema,
} = require("./user-joi-schemas");

const registrationCheckSchema = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
    name: nameSchema,
  }),
});

const loginCheckSchema = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
});

module.exports = {
  registrationCheckSchema,
  loginCheckSchema,
};
