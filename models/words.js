const mongoose = require("mongoose");

const wordsSchema = mongoose.Schema({
    words: [String],
    points: Number,
    imageUrl: String
});

module.exports = mongoose.model("Words", wordsSchema);