//const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    address: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ["merchant", "liquidityProvider", "treasuryManager"],
        default: "merchant"
    }

}, {
    timestamps: true
})


const User = mongoose.model("User", UserSchema);
export default User;