import React from "react";
import logo from "../image/logo.webp"
import styles from './NavBar.module.css'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
            <div className="container-fluid ">

                <img className="" style={{width: "120px" ,marginLeft: "200px", marginRight: "100px"}} src={logo} href="logo"/>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav " >
                        <li className="nav-item" >
                            <a className="nav-link active text-secondary" aria-current="page" href="home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="home">AboutCorona</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="home">Symptoms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary " href="home" tabindex="-1" aria-disabled="true">Prevention</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary" href="home" tabindex="-1" aria-disabled="true">Treatment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary" href="home" tabindex="-1" aria-disabled="true">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary" href="home" tabindex="-1" aria-disabled="true">News</a>
                        </li>
                        <li className="nav-item bg-primary rounded-pill p-1 ">
                            <a className="nav-link  text-secondary " href="home" tabindex="-1" aria-disabled="true">Do $ Don't</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default NavBar