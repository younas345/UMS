const express = require("express");
const productModel = require("../model/productModel");
const multer = require("multer");
const path = require("path");

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
        const url = path.join(
            "F:/MERN Project/UMS/backend/productsImage/" + req.file.filename
        );
        const product = new productModel({
            image: url,
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
