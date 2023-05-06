const mongoose = require("mongoose");
const UserData = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("UserAuth", UserData);
