const crudModel = require("../model/userCrudModel");

exports.UserGet = async (req, res) => {
    try {
        const allUserData = await crudModel.find();
        res.send(allUserData);
    } catch (error) {
        res.json({
            message: "no data found",
            error
        });
    }
};

exports.postUser = async (req, res) => {
    try {
        const postUserData = new crudModel(req.body);
        await postUserData.save();
        res.json({
            message: "user save"
        });
    } catch (error) {
        res.json({
            message: "cannot post user data",
            error
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email, phone, age } = req.body;
        const updatingData = await crudModel.findOne({
            email: req.params.email
        });
        if (name) {
            updatingData.name = name;
        }
        if (email) {
            updatingData.email = email;
        }
        if (phone) {
            updatingData.phone = phone;
        }
        if (age) {
            updatingData.age = age;
        }

        await updatingData.save();
        res.json({
            message: "user update"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "we cannot find data against this email"
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleteData = await crudModel.deleteOne({
            email: req.params.email
        });
        // await deleteData.delete();
        res.json({
            message: "user delete"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "we cannot find data against this email"
        });
    }
};
