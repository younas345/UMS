const mongoose = require("mongoose");
const product = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ["inventory", "no inventory"],
            default: "inventory"
        },
        productName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Products", product);
