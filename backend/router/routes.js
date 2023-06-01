const express = require("express");
const Auth = require("../controller/userController");
const crudController = require("../controller/crudController");
const tokenVerify = require("../middleware/tokenVerify");
const Route = express.Router();
Route.use(express.json());
Route.get("/", tokenVerify.jwtVerifyToken, crudController.UserGet);
Route.post("/post", tokenVerify.jwtVerifyToken, crudController.postUser);
Route.put("/update/:id", tokenVerify.jwtVerifyToken, crudController.updateUser);
Route.delete(
    "/delete/:id",
    tokenVerify.jwtVerifyToken,
    crudController.deleteUser
);
Route.post("/register", Auth.upload.single("image"), Auth.UserRegister);
Route.post("/login", Auth.UserLogin);
module.exports = Route;
