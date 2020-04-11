const mongoose = require("mongoose");
const validator = require("validator");

const articleSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    text: {
      type: String,
      required: true,
      minlength: 2,
    },
    date: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 30,
    },
    source: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    link: {
      type: String,
      required: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message:
          "Ссылка на картинку должна быть в формате: https://sun9-24.userapi.com/c630831/v630831668/33726/KNQZxpXt3jk.jpg",
      },
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message:
          "Ссылка на картинку должна быть в формате: https://sun9-24.userapi.com/c630831/v630831668/33726/KNQZxpXt3jk.jpg",
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      select: false,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("article", articleSchema);
