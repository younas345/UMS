const mongoose = require("mongoose");
const userCrud = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("UserCrud", userCrud);
