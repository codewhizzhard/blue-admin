const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "add the username"]
    },
    email: {
        type: String,
        required: [true, "please email"],
        unique: [true, "email address taken"]
    },
    password: {
        type: String,
        required: [true, "add password"],

    }
}, {
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)