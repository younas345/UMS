import React from "react";
import "../Productlisting/Style.css";
import { useState } from "react";

const ProductAdd = () => {
    const [productImage, setProductImage] = useState(null);
    const [productData, setProductData] = useState({
        type: "",
        productName: "",
        description: "",
        brandName: "",
        price: ""
    });
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
        console.log(productData);
    };
    return (
        <div>
            <form className="form">
                <h1>Fill The Form</h1>
                <div>
                    <input
                        className="getData"
                        onChange={(e) => setProductImage(e.target.files[0])}
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
                    />
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
                        name="brand"
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
                </div>
                <button className="btnn">Submit</button>
                <button className="btnn">Cencel</button>
            </form>
        </div>
    );
};

export default ProductAdd;
