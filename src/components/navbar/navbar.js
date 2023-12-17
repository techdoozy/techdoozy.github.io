import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Logo from '../../logo.svg'
import { NavData } from './navData';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        // setClick(!click)
        document.body.classList.add('offcanvas-menu');
    }
    const closeMobileMenu = () => {
        // setClick(false)
        document.body.classList.remove('offcanvas-menu');
    }
    const location = useLocation()


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
                            <span className="icon-close2 js-menu-toggle" onClick={closeMobileMenu}><IoMdClose /></span>
                        </div>
                    </div>

                    <div className="site-mobile-menu-body">
                        <ul className="site-nav-wrap">
                            {NavData.map((menu, index) => {
                                return (
                                    <>
                                        {(menu.children !== undefined) ?
                                            <li className="has-children">
                                                <a href="/">{menu.title}</a>
                                                <ul className="dropdown arrow-top">
                                                    {menu.children.map((sub, index) => {
                                                        return (
                                                            <>
                                                                                {(sub.children !== undefined) ? 
                                                                                    <li className="has-children">
                                                                                         <span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false" />
                                                                                        <a href="/">{sub.title}</a>
                                                                                        <ul className="collapse show">
                                                                                            {sub.children.map((subsub, index) => {
                                                                                                return(
                                                                                                    <>
                                                                                                    <li><a href="/">{subsub.title}</a></li>
                                                                                                    </>
                                                                                                )
                                                                                            })}
                                                                                        </ul>
                                                                                    </li>
                                                                                :
                                                                                    <>
                                                                                    <li><a href="/">{sub.title}</a></li>
                                                                                    </>
                                                                                }
                                                                                {/* <li><a href="/">{sub.title}</a></li> */}
                                                                                </>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            :
                                            <li className={(location.pathname == menu.path) ? "active" : ""}>
                                                <a href="index.html">{menu.title}</a>
                                            </li>
                                        }
                                    </>
                                )
                            })}
                            {/* <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="has-children active"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false" />
                                <a href="rooms.html">Rooms</a>
                                <ul className="collapse" id="collapseItem0" style={{}}>
                                    <li><a href="rooms.html">Standard Room</a></li>
                                    <li><a href="rooms.html">Family Room</a></li>
                                    <li><a href="rooms.html">Single Room</a></li>
                                    <li className="has-children"><span className="arrow-collapse active" data-toggle="collapse" data-target="#collapseItem1" aria-expanded="true" />
                                        <a href="rooms.html">Rooms</a>
                                        <ul className="collapse show" id="collapseItem1" style={{}}>
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
                            <li><a href="contact.html">Contact</a></li> */}
                        </ul>
                    </div>



                </div> {/* .site-mobile-menu */}
                <div className="site-navbar-wrap js-site-navbar bg-white scrolled">
                    <div className="container">
                        <div className="site-navbar bg-light">
                            <div className="py-1">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        {/* <h2 className="mb-0 site-logo"><a href="index.html">TechDoozy</a></h2> */}
                                        <img src={Logo} className="mb-0 site-logo" width={220}/>
                                    </div>
                                    <div className="col-10">
                                        <nav className="site-navigation text-right" role="navigation">
                                            <div className="container">
                                                <div className="d-inline-block d-lg-none  ml-md-0 mr-auto py-3">
                                                    <a href="#" className="site-menu-toggle js-menu-toggle">
                                                        <span className="icon-menu h3" onClick={handleClick}><RxHamburgerMenu/></span>
                                                        </a>
                                                        </div>
                                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                    {/* { menu.children && menu.children.length > 0
        ? menu.children.map((subItem, index) => {
            return (
                <>
                <li><a href="rooms.html">Standard Room</a></li>
                </>
            ) }) : null } */}
                                                    {NavData.map((menu, index) => {
                                                        return (
                                                            <>
                                                            {(menu.children !== undefined) ? 
                                                                <li className="has-children">
                                                                    <a href="/">{menu.title}</a>
                                                                    <ul className="dropdown arrow-top">
                                                                        {menu.children.map((sub, index) => {
                                                                            return(
                                                                                <>
                                                                                {(sub.children !== undefined) ? 
                                                                                    <li className="has-children">
                                                                                        <a href="/">{sub.title}</a>
                                                                                        <ul className="dropdown">
                                                                                            {sub.children.map((subsub, index) => {
                                                                                                return(
                                                                                                    <>
                                                                                                    <li><a href="/">{subsub.title}</a></li>
                                                                                                    </>
                                                                                                )
                                                                                            })}
                                                                                        </ul>
                                                                                    </li>
                                                                                :
                                                                                    <>
                                                                                    <li><a href="/">{sub.title}</a></li>
                                                                                    </>
                                                                                }
                                                                                {/* <li><a href="/">{sub.title}</a></li> */}
                                                                                </>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </li>
                                                            : 
                                                                <li className={(location.pathname == menu.path) ? "active" : ""}>
                                                                    <a href="index.html">{menu.title}</a>
                                                                </li>
                                                            }
                                                            </>
                                                        )
                                                    })}
                                                    {/* <li className="active">
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li className="has-children">
                                                        <a href="/">Academic Projects</a>
                                                        <ul className="dropdown arrow-top">
                                                            <li><a href="/">MBA Projects</a></li>
                                                            <li><a href="/">Embedded Projects</a></li>
                                                            <li><a href="/">Python Projects</a></li>
                                                            <li className="has-children">
                                                                <a href="/">Java Projects</a>
                                                                <ul className="dropdown">
                                                                    <li><a href="/">Machine Learning</a></li>
                                                                    <li><a href="/">Artificial Intelligence</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/">Internship</a></li>
                                                    <li><a href="/">About</a></li>
                                                    <li><a href="/">Contact</a></li> */}
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