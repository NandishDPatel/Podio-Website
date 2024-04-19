import React from 'react';
import {
    Link,
} from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <img src="img/podio-logo.svg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav nav-items me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/usecase'>Use Cases</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Request a Demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">More</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <button className="btn me-3" type="button">Login</button>
                                <button className="btn btn-primary rounded-pill me-2 signUp" type="button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;