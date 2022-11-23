import React from "react";
import logo from "../image/logo.webp"
import { Link } from 'react-scroll'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
<>
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
            <div className="container ">

                <img className="" style={{width: "100px"}} src={logo} href="logo"/>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className=" navbar-nav  justify-content-between  " >
                        <li className="nav-item" >
                            <Link className="nav-link active text-secondary" aria-current="page" href="home" activeClass="active" smooth spy to="about">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" href="home" activeClass="active" smooth spy to="about">AboutCorona</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" href="home" activeClass="active" smooth spy to="about">Symptoms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-secondary " href="home" tabindex="-1" aria-disabled="true" activeClass="active" smooth spy to="about">Prevention</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-secondary" href="home" tabindex="-1" aria-disabled="true" activeClass="active" smooth spy to="about">Treatment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-secondary" href="home" tabindex="-1" aria-disabled="true" activeClass="active" smooth spy to="about">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-secondary" href="home" tabindex="-1" aria-disabled="true" activeClass="active" smooth spy to="about">News</Link>
                        </li>
                        <li className="nav-item bg-primary rounded-pill p-1 ">
                            <Link className="nav-link  text-secondary " href="home" tabindex="-1" aria-disabled="true" activeClass="active" smooth spy to="about">Do $ Don't</Link>
                        </li>
                    </ul>

                </div>
            </div>
       
        </nav>
        <section id="about">ABOUT</section>
         <section id="projects"> project</section>
        <section id="blog1">BLOG</section>
        <section id="contact">CONTACT ME</section>
</>
    )
}

export default NavBar