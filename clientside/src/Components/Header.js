import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <Link to="/">
                    {" "}
                    <li>Home</li>
                </Link>
                <Link to="/login">
                    {" "}
                    <li>Login</li>
                </Link>
                <Link to="/register">
                    <li>Register</li>
                </Link>
                <Link to="/all_data">
                    <li>All_Data</li>
                </Link>
                {/* <Link to="/login">
                    <li>logout</li>
                </Link> */}
            </ul>
        </div>
    );
};

export default Header;
