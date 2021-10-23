const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userID: String,
    wordsused: [String],
    totalpoints: {type: Number, default: 0},
    serverID: String,
    userName: String
});

module.exports = mongoose.model("User", userSchema);