import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import axios from "axios";

const ProductShow = () => {
    const [apiData, setApiData] = useState([]);
    const getData = async () => {
        await axios
            .get("http://localhost:4000/products/allProducts")
            .then((res) => {
                // console.log(res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    const deleteData = async (id) => {
        // console.log(id);
        await axios
            .delete(`http://localhost:4000/products/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                getData();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Image</td>
                        <td>Type</td>
                        <td>productName</td>
                        <td>Description</td>
                        <td>BrandName</td>
                        <td>Price</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>
                                    <img
                                        src={item.image}
                                        alt="Item"
                                        style={{
                                            height: "50px",
                                            width: "100px"
                                        }}
                                    />
                                </td>
                                <td>{item.type}</td>
                                <td>{item.productName}</td>
                                <td>{item.description}</td>
                                <td>{item.brandName}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        state={{
                                            data: {
                                                id: item._id,
                                                image: item.image,
                                                type: item.type,
                                                productName: item.productName,
                                                description: item.description,
                                                brandName: item.brandName,
                                                price: item.price
                                            }
                                        }}
                                        variant="Primary"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        variant="danger"
                                        onClick={() => deleteData(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductShow;
