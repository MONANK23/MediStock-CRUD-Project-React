import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailFaculty(){
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product/"+id;
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);



    return(<>
        <Link className="btn btn-info" to="/faculties">Back</Link>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>{
            const apiUrl = "https://66fea4762b9aac9c997cd24c.mockapi.io/Product"+id;
            fetch(apiUrl,{method:"DELETE"})
            .then(res=>res.json())
            .then(res=>{
                navigate("/faculties");
            });

            

        }} className="btn btn-danger">Delete</button>
        <h1>Name = {data.FacultyName}</h1>
        <img src={data.FacultyImage} />
    </>);
}

export default DetailFaculty;