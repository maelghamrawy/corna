import React from "react";
import logo from "../image/logo.webp"
import { Link } from 'react-scroll'
import styles from './NavBar.module.css'
import Header from "../header/Header.js";
import About from "../About/About";
import Spread from "../Spread/Spread";
import Symptoms from "../Symptoms/Symptoms";
import Prevention from "../prevention/Prevention";
import Protect from "../Protect/Protect";



const NavBar = () => {
    return (
        <>
            <nav className="Nav navbar navbar-expand-lg navbar-light bg-primary ">
                <div className=" container ">

                    <img className="" style={{ width: "100px" }} src={logo} href="logo" />

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className=" navbar-nav  justify-content-round  " >
                            <li className="nav-item" >
                                <Link className="nav-link  text-secondary" aria-current="page" href="home" activeClass="active" to="Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" href="home" activeClass="active" to="AboutCorona">AboutCorona</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" href="home" activeClass="active"  to="Spread">Spread</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-secondary " href="home" activeClass="active"  spy to="Prevention">Prevention</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-secondary" href="home" activeClass="active" smooth spy to="Treatment">Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-secondary" href="home" activeClass="active" smooth spy to="FAQ">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-secondary" href="home" activeClass="active" smooth spy to="News">News</Link>
                            </li>
                            <li className="nav-item bg-primary rounded-pill p-1 ">
                                <Link className="nav-link  text-secondary " href="home" activeClass="active" smooth spy to="Do">Do $ Don't</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
            <section id="Home"> <Header /> </section>
            <section id="AboutCorona"><About /> </section>
            <section id="Spread"> <Spread /></section>
            <section id="Symptoms"> <Symptoms /></section>
            <section id="Prevention"> <Prevention /></section>
            <section id="Protect"> <Protect /></section>


        </>
    )
}

export default NavBar