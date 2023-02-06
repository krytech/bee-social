const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 40,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        max: 40,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPic: {
        type: String,
        detault: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    desc: {
        type: String,
        max: 60,
    },
    city: {
        type: String,
        max: 60,
    },
    from: {
        type: String,
        max: 60,
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    },
  },
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
