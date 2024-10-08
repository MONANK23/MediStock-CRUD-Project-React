import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetAllProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  
  const foramtedFaculties = data.map((fac) => { 
    return (
      <tr key={fac.id}>
        <td>{fac.id}</td>
        <td>{fac.productName}</td>
        <td>{fac.ManufacturerName}</td> 
        <td>
          <Link className="btn btn-info" to={"/product/" + fac.id}>
            Read Full Details
          </Link>
        </td>
        <td>
          <Link className="btn btn-warning" to={"/product/edit/" + fac.id}>
            Edit
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Link to="/product/add" className="btn btn-primary">
        Add New Product
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Manufacturer Name</th>
            <th>Details</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{foramtedFaculties}</tbody>
      </table>
    </>
  );
}

export default GetAllProduct;
