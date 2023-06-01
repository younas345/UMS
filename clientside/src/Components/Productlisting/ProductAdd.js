import React from "react";
import "../Productlisting/Style.css";
import { useState } from "react";
import axios from "axios";

const ProductAdd = () => {
    const [image, setImage] = useState(null);
    const [nameValidate, setNameValidate] = useState(false);
    const [priceValidate, setPriceValidate] = useState(false);
    const [productData, setProductData] = useState({
        type: "",
        productName: "",
        description: "",
        brandName: "",
        price: 0
    });
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (productData.brandName === "") {
            alert("Brand Name should be 5 character");
            setNameValidate(true);
            return;
        }
        if (productData.price === 0) {
            setPriceValidate(true);
            alert("Price should be Required");
            return;
        }
        const formData = new FormData();
        formData.append("productsImage", image);
        formData.append("type", productData.type);
        formData.append("productName", productData.productName);
        formData.append("description", productData.description);
        formData.append("brandName", productData.brandName);
        formData.append("price", productData.price);
        await axios
            .post("http://localhost:4000/products/post", formData)
            .then((res) => {
                console.log(res.data);
                // getData();
                setProductData({
                    type: "",
                    productName: "",
                    description: "",
                    brandName: "",
                    price: ""
                });
                setImage(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div>
                <form className="form">
                    <h1>Fill The Form</h1>
                    <div>
                        <input
                            className="getData"
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            name="image"
                        />
                    </div>
                    <div>
                        <select
                            className="getData"
                            name="type"
                            value={productData.type}
                            onChange={handleChange}
                        >
                            <option>select product</option>
                            <option>Inventory</option>
                            <option>NoInventory</option>
                        </select>
                    </div>

                    <div>
                        <input
                            className="getData"
                            type="text"
                            name="productName"
                            placeholder="enter product name"
                            value={productData.productName}
                            onChange={handleChange}
                            // onChange={nameValidation}
                        />
                        {nameValidate ? (
                            <span>
                                {" "}
                                ProductName is greater then 5 character
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        <textarea
                            className="getData"
                            name="description"
                            placeholder="enter description  of your product"
                            value={productData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            className="getData"
                            type="text"
                            name="brandName"
                            placeholder="Brand Name"
                            value={productData.brandName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            className="getData"
                            type="number"
                            name="price"
                            placeholder="enter price"
                            value={productData.price}
                            onChange={handleChange}
                        />
                        {priceValidate ? <span> Price is Required</span> : ""}
                    </div>
                    <button className="btnn" onClick={handleSubmit}>
                        Submit
                    </button>
                    <button className="btnn">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default ProductAdd;
