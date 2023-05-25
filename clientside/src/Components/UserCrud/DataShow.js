import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const DataShow = () => {
    const token = localStorage.getItem("token");
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000", {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                setAllData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((item, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataShow;
