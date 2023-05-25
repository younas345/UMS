import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import axios from "../../axios";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", loginData).then((res) => {
            console.log(res.data);
            const token = res.data.token;

            localStorage.setItem("token", token);
            navigate("/all_data");
        });
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    };

    return (
        <div>
            <div className="main_page">
                <h1 className="m-5">Login Form</h1>
                <form>
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                        />
                        <label className="form-label">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={handleChange}
                        />
                        <label className="form-label">Password</label>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-block mb-4"
                        onClick={handleSubmit}
                    >
                        Sign in
                    </button>

                    <div className="text-center">
                        <p>
                            Not a register? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
