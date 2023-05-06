const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./router/routes");
// const Router = require("express").Router();
const cors = require("cors");
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
app.use("/", Router);

app.listen(4000, () => {
    console.log("server is running on this 4000");
});
