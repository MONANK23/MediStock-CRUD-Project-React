import { Link, Outlet } from "react-router-dom";
import './Layout.css'; 

function Layout() {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                    <Link 
                    className="navbar-brand" 
                    to="/" 
                    style={{ color: 'lime' }} 
                    >
                    <b>MediStock</b>
                    </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/"><b>Home</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/product"><b>Products</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact"><b>Contact</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about"><b>About-MediStock</b></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col m-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
