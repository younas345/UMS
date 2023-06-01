const product = require("../controller/productController");
const express = require("express");
const Route = express.Router();

Route.get("/allProducts", product.getProducts);
Route.post(
    "/post",
    product.upload.single("productsImage"),
    product.postProducts
);
Route.put("/update/:id", product.updateData);
Route.delete("/delete/:id", product.deleteProduct);
module.exports = Route;
