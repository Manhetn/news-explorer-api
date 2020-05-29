const mongoose = require("mongoose");
const validator = require("validator");

const { messages } = require("../utils/messages");
// схема статьи
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
      maxlength: 150,
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
        message: messages.article.link.uri,
      },
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message: messages.article.image.uri,
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
