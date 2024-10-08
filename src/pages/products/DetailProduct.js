import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './DetailProduct.css';  // Add CSS file import

function DetailProduct() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product/" + id;
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <Link className="btn btn-info" to="/product">
          Back
        </Link>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product/" + id;
            fetch(apiUrl, { method: "DELETE" })
              .then((res) => res.json())
              .then((res) => {
                navigate("/product");
              });
          }}
          className="btn btn-danger"
        >
          Delete Product
        </button>
      </div>
      <div className="product-info">
        <h2 className="product-manufacturer"><b>Id:</b> {data.id}</h2>
        <h2 className="product-manufacturer"><b>Name:</b> {data.productName}</h2>
        <h2 className="product-manufacturer"><b>Manufacturer:</b> {data.ManufacturerName}</h2>
        <h3 className="product-price"><b>Price:</b> {data.ProductPrice}</h3>
        <div className="product-image-container">
          <img src={data.avatar} alt={data.ProductName} className="product-image" />
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
