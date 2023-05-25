import React from "react";
import { Link } from "react-router-dom";

const ul = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%"
};
const li = {
    display: "inline-block",
    margin: "0 5px",
    padding: "5px"
};

const Header = () => {
    return (
        <div>
            <ul style={ul}>
                <Link to="/">
                    {" "}
                    <li style={li}> Home </li>
                </Link>
                <Link to="/login">
                    {" "}
                    <li style={li}> Login </li>
                </Link>
                <Link to="/register">
                    <li style={li}> Register </li>
                </Link>
                <Link to="/all_data">
                    <li style={li}> All_Data </li>
                </Link>
                <Link to="/products">
                    <li style={li}> Products </li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;
