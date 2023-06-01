import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const DataShow = () => {
    const token = localStorage.getItem("token");
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [age, setAge] = useState();
    const [allData, setAllData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = () => {
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
    };
    useEffect(() => {
        getData();
    });
    const deleteUser = (id) => {
        axios
            .delete(`http://localhost:4000/delete/${id}`, {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                console.log(res);
                getData();
            });
    };
    const selectUser = (data) => {
        handleShow();
        setId(data._id);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAge(data.age);
    };
    const handleSubmit = () => {
        let data = { name, email, phone, age };
        axios
            .put(`http://localhost:4000/update/${id}`, data, {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                console.log("update", res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div>
                            <input
                                className="getData"
                                type="text"
                                name="name"
                                placeholder="enter  name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="getData"
                                type="email"
                                name="email"
                                placeholder="enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <input
                                className="getData"
                                type="text"
                                name="phone"
                                placeholder="enter phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="getData"
                                type="number"
                                name="age"
                                placeholder="enter  age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={handleClose}>Cancel</button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Update</th>
                        <th>Delete</th>
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
                            <td>
                                <button onClick={() => selectUser(item)}>
                                    Update
                                </button>
                            </td>
                            <td>
                                <button onClick={() => deleteUser(item._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataShow;
