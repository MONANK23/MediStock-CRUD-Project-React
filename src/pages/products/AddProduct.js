import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddProduct.css'; 
import { Link } from "react-router-dom";
function AddProduct() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product";
        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            navigate("/product");
        })
        .catch((error) => {
            console.error("Error adding product:", error);
        });
    };

    return (
        <div className="form-container">
            <form className="form-card" onSubmit={handleSubmit}>
                <h2 className="form-title">Add New Product</h2>
                <div className="form-group">
                    <label htmlFor="FacultyID">Product ID</label>
                    <input
                        name="ID"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Product ID"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                        name="productName"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Product Image URL</label>
                    <input
                        name="avatar"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Image URL"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ManufacturerName">Manufacturer Name</label>
                    <input
                        name="FacultyDepartment"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Manufacturer Name"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductPrice">Product Price</label>
                    <input
                        name="ProductPrice"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Price"
                        required 
                    />
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Add Product</button>
                <Link to="/product" className="btn btn-primary">Back</Link>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
