import React, { useState } from "react";
import "../Register/Register.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        age: "",
        password: ""
    });
    const [newImage, setNewImage] = useState(null);
    const handleInput = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
        // const save = registerData;
        // console.log(save);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", registerData.name);
        formData.append("email", registerData.email);
        formData.append("age", registerData.age);
        formData.append("password", registerData.password);
        formData.append("image", newImage);
        await axios
            .post("http://localhost:4000/register", formData)
            .then((res) => {
                console.log("user register", res);
                navigate("/login");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div className="container">
            <h1 className="text-center">Registration Form</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={registerData.name}
                        onChange={handleInput}
                        placeholder="enter name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleInput}
                        placeholder="name@example.com"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={registerData.age}
                        onChange={handleInput}
                        placeholder="enter age"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="enter password"
                        name="password"
                        value={registerData.password}
                        onChange={handleInput}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Upload your profile picture</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        accept="image/*"
                        // value={}
                        onChange={(e) => {
                            setNewImage(e.target.files[0]);
                        }}
                    />
                </Form.Group>
                <div className="d-grid">
                    <button
                        type="button"
                        className="btn btn-primary btn-block mb-4 "
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="text-center">
                    <p>
                        Already Register? <Link to="/login">Login</Link>
                    </p>
                </div>
            </Form>
        </div>
    );
};

export default Register;
