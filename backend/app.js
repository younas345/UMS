const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./router/routes");
const productRoute = require("./router/productRoutes");
// const Router = require("express").Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const DB = require("./mongoose/connection");

mongoose.set("strictQuery", false);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Mongo DB connected");
    })
    .catch((err) => {
        console.log("ERROR in connecting DB", err);
    });

app.use(express.json());
app.use("/productsImage", express.static("productsImage"));
app.use("/images", express.static("images"));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/", Router);
app.use("/products", productRoute);

app.listen(4000, () => {
    console.log("server is running on this 4000");
});
