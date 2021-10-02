const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  pages: {
    type: Number,
    required: true,
    validate: (v) => v < 10_000 && v > 0,
  },
});

exports.Book = new model("book", bookSchema);
