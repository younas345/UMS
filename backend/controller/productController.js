const express = require("express");
const productModel = require("../model/productModel");
const multer = require("multer");
const path = require("path");
const { type } = require("os");

exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.send(products);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./productsImage");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
exports.upload = multer({ storage: storage });
exports.postProducts = async (req, res) => {
    try {
        // const url = path.join(
        //     __dirname + req.file.filename
        // );
        const product = new productModel({
            image: `${req.protocol}://${req.get("host")}/productsImage/${
                req.file.filename
            }`,
            type: req.body.type,
            productName: req.body.productName,
            description: req.body.description,
            brandName: req.body.brandName,
            price: req.body.price
        });
        await product.save();
        res.json({
            message: "product add"
        });
    } catch (error) {
        res.json(error);
        message: error.message;
    }
};
exports.updateData = async (req, res) => {
    try {
        const { image, type, productName, description, brandName, price } =
            req.body;
        const update = await productModel.findByIdAndUpdate({
            _id: req.params.id
        });
        if (image) {
            update.image = req.body.image;
        }
        if (type) {
            update.type = req.body.type;
        }
        if (productName) {
            update.productName = req.body.productName;
        }
        if (description) {
            update.description = req.body.description;
        }
        if (brandName) {
            update.brandName = req.body.brandName;
        }
        if (price) {
            update.price = req.body.price;
        }
        await update.save();
        res.send("update");
    } catch (error) {
        console.log(error);
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        const data = await productModel.findByIdAndDelete({
            _id: req.params.id
        });
        res.send("deleted");
    } catch (error) {
        console.log(error);
    }
};
