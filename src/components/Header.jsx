import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AbhiVerma</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled">Disabled</a> */}
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <NavLink to="/" className="active nav-link">Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="about" className="nav-link">About </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="service" className="nav-link">Service </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="contact" className="nav-link">Contact </NavLink>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header