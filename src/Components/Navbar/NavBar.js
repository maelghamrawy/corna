import React from "react";
import logo from "../image/logo.webp";
import { Link } from "react-scroll";
// import styles from "./NavBar.module.css";
import "./NavBar.css";
import Header from "../header/Header.js";
import About from "../About/About";
import Spread from "../Spread/Spread";
import Symptoms from "../Symptoms/Symptoms";
import Prevention from "../prevention/Prevention";
import Protect from "../Protect/Protect";
import Treatment from "../Treatment/Treatment";
import News from "../News/News";
const NavBar = () => {


  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light">
        <div className=" container">
        <img className="" style={{ width: "100px" }} src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse justify-content-evenly navbar-collapse">

            <ul className="navbar-nav"   id="navbarNav">
              <li className="nav-item ">  
                <Link
                  className="nav-link  "
                  aria-current="page"
                  href="home"
                  activeClass="active"
                  to="Home"
                  spy={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  href="home"
                  activeClass="active"
                  spy={true}

                  to="AboutCorona"
                >
                  AboutCorona
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  href="home"
                  activeClass="active"
                  to="Spread"
                  spy={true}

                >
                  Spread
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link   "
                  href="home"
                  activeClass="active"
                  spy={true}
                  to="Prevention"
                >
                  Prevention
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  "
                  href="home"
                  activeClass="active"
                  smooth
                  spy={true}
                  to="treatment"
                >
                  Treatment
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link  "
                  href="home"
                  activeClass="active"
                  smooth
                  spy = {true}
                  to="FAQ"
                >
                  FAQ
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link  "
                  href="home"
                  activeClass="active"
                  spy  = {true}
                  to="News"
                >
                  News
                </Link>
              </li>
              <li className="test nav-item  ">
                <Link
                  className="nav-link  did "
                  href="home"
                  activeClass="active"

                  spy ={true}
                  to="News"
                >
                  Do $ Don't
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="Home">
        {" "}
        <Header />{" "}
      </section>
      <section id="AboutCorona">
        <About />{" "}
      </section>
      <section id="Spread">
        {" "}
        <Spread />
      </section>
      <section id="Symptoms">
        {" "}
        <Symptoms />
      </section>
      <section id="Prevention">
        {" "}
        <Prevention />
      </section>
      <section id="Protect">
        {" "}
        <Protect />
      </section>
      <section id="treatment">
        {" "}
        <Treatment/>
      </section>
      <section id="News">
        {" "}
        <News/>
      </section>
    </>
  );
};

export default NavBar;
