import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AddProduct.css'; 

function EditProduct() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product/" + id;
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product/" + id;
        fetch(apiUrl, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => {
                navigate("/product"); // Redirect to the product list after successful update
            })
            .catch((error) => {
                console.error("Error updating product:", error);
            });
    };

    return (
        <div className="form-container">
            <form className="form-card" onSubmit={handleSubmit}> {/* Added onSubmit here */}
                <h2 className="form-title">Edit Product Details</h2>
                <div className="form-group">
                    <label htmlFor="id">Product ID</label>
                    <input
                        name="id"
                        value={data.id || ''}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Edit Product ID"
                        readOnly // Making ID read-only
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                        name="productName" // This should match the key in your data
                        value={data.productName || ''} // Corrected from ProductName to productName
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Edit Product Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Product Image URL</label>
                    <input
                        name="avatar"
                        value={data.avatar || ''}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Edit Product Image URL"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ManufacturerName">Manufacturer Name</label>
                    <input
                        name="ManufacturerName"
                        value={data.ManufacturerName || ''}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Edit Manufacturer Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductPrice">Product Price</label>
                    <input
                        name="ProductPrice"
                        value={data.ProductPrice || ''}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Edit Product Price"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Edit Product Details</button> {/* Changed button to type="submit" */}
            </form>
        </div>
    );
}

export default EditProduct;
