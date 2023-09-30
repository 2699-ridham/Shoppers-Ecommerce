import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {
    const state = useSelector((state) => state.AddDelItems)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-lg">
                <div className="container">
                    <div className="d-flex flex-column">
                        <span className="navbar-brand fw-bold fs-4" >SHOPPERS.com</span>
                        <span className="navbar-brand fs-6">YOUR SHOPPING PARTNER</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/Login-page" className="btn btn-outline-success">
                                <i className="fa fa-sign-in me-1"> Login</i>
                            </Link>
                            <Link to="/register" className="btn btn-outline-danger ms-2">
                                <i className="fa fa-user-plus me-1"> Register</i>
                            </Link>
                            <Link to='/cart' className="btn btn-outline-primary ms-2">
                                <i className="fa fa-shopping-cart me-1"> Cart ({state.length})</i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
