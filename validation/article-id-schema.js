const { celebrate, Joi } = require("celebrate");

const { messages } = require("../utils/messages");
const { idSchema } = require("./joi-schemas/id-schema");
// схема проверки id стаьти
module.exports.articleIdSchema = celebrate({
  params: Joi.object().keys({
    id: idSchema.messages({ "string.length": messages.article.id.length }),
  }),
});
