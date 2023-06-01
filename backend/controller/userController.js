const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");
const jwt = require("jsonwebtoken");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage });
exports.UserRegister = async (req, res) => {
    try {
        const url = `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
        }`;
        const hashed = bcrypt.hashSync(req.body.password, 10);
        const userData = new userModel({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: hashed,
            image: url
        });

        await userData.save();
        res.json({
            message: "image upload and user register"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "user can not be register"
        });
    }
};

exports.UserLogin = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const userData = await userModel.findOne({ email: email });
        if (userData) {
            const compass = await bcrypt.compare(password, userData.password);
            if (userData.email == email && compass) {
                jwt.sign({ name: userData.email }, "seckey", (err, token) => {
                    if (token) {
                        res.json({
                            message: "user successfully login ",
                            token,
                            userData
                        });
                    } else {
                        res.json({
                            message: "token cannot be created"
                        });
                    }
                });
            } else {
                res.json({
                    message: "plz enter your correct password"
                });
            }
        } else {
            res.json({
                message: "plz enter your correct email"
            });
        }
    } else {
        res.json({
            message: "plz enter all field"
        });
    }
};
