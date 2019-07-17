const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    authors: [String],
    description: String,
    image: { type: String, required: true },
    link: { type: String, required: true }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

