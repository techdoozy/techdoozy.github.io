import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './navbar.css'
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            {/* <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <GiRocketThruster className="navbar-icon" />
                            Skye
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider> */}

            <div>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div> {/* .site-mobile-menu */}
                <div className="site-navbar-wrap js-site-navbar bg-white scrolled">
                    <div className="container">
                        <div className="site-navbar bg-light">
                            <div className="py-1">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        {/* <h2 className="mb-0 site-logo"><a href="index.html">TechDoozy</a></h2> */}
                                        <img src="/logo.svg" className="mb-0 site-logo" width={220}/>
                                    </div>
                                    <div className="col-10">
                                        <nav className="site-navigation text-right" role="navigation">
                                            <div className="container">
                                                <div className="d-inline-block d-lg-none  ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu h3" /></a></div>
                                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                    <li className="active">
                                                        <a href="index.html">Home</a>
                                                    </li>
                                                    <li className="has-children">
                                                        <a href="rooms.html">Rooms</a>
                                                        <ul className="dropdown arrow-top">
                                                            <li><a href="rooms.html">Standard Room</a></li>
                                                            <li><a href="rooms.html">Family Room</a></li>
                                                            <li><a href="rooms.html">Single Room</a></li>
                                                            <li className="has-children">
                                                                <a href="rooms.html">Rooms</a>
                                                                <ul className="dropdown">
                                                                    <li><a href="rooms.html">America</a></li>
                                                                    <li><a href="rooms.html">Europe</a></li>
                                                                    <li><a href="rooms.html">Asia</a></li>
                                                                    <li><a href="rooms.html">Africa</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="events.html">Events</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;