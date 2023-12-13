import React from "react";
import { SliderData } from '../components/imageslider/Sliderdata';
import ImageSlider from "../components/imageslider/ImageSlider";
import { FaJava } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { LiaPython } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiMechanicalArm } from "react-icons/gi";
import { FaCircleNodes } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import Testimonials from '../components/testimonials'


function Home() {
    return (
        <>
            <div>
                <ImageSlider slides={SliderData} />

                <IconContext.Provider value={{ color: "#000" }}>
                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                                    <h2 className="mb-5">Over 11000+ IEEE Academic Projects</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <FaJava className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">Java Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <HiOutlineCpuChip className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">Embedded Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <LiaPython className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">Python Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <FaLaptopCode className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">BCA Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <IoBulbOutline className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">Mini Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <FaUsers className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">MBA Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <GiMechanicalArm className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">Mechanical & Civil Projects</h2>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="text-center p-4 item">
                                        <FaCircleNodes className="display-3 mb-3 text-primary" />
                                        <h2 className="h5">NS2 Projects</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IconContext.Provider>

                {/* Small Content */}


                <div className="py-5 upcoming-events" style={{ backgroundImage: 'url("images/hero_6.jpeg")', backgroundAttachment: 'fixed' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h2 className="text-white">IEEE Latest Projects Catalogue</h2>
                                <a href="#" className="text-white btn btn-outline-warning rounded-0 text-uppercase">Download</a>
                            </div>
                            <div className="col-md-6">
                                <span className="caption">The Promo will start in</span>
                                <div id="date-countdown" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT US */}

                <div className="site-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <div className="img-border">
                                    <a href="https://vimeo.com/28959265" className="popup-vimeo image-play">
                                        <span className="icon-wrap">
                                            <span className="icon" >
                                                <FaPlay />
                                            </span>
                                        </span>
                                        <img src="https://as2.ftcdn.net/v2/jpg/03/84/55/29/1000_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <img src="https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg" alt="Image" className="img-fluid image-absolute" />
                            </div>
                            <div className="col-md-5 ml-auto">
                                <div className="section-heading text-left">
                                    <h2 className="mb-5">About Us</h2>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..</p>
                                <p><a href="https://vimeo.com/28959265" className="popup-vimeo text-uppercase">Watch Video <span className="icon-arrow-right small" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}

                {/* <div className="site-section block-14 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                                <h2>What People Say</h2>
                            </div>
                        </div>

                        <Testimonials />

                    </div>
                </div> */}

                {/* Location */}

                <div className="py-5 quick-contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div>
                                    <span className="icon-room text-white h2 d-block" />
                                    <h2>Location</h2>
                                    <p className="mb-0">New York - 2398 <br />  10 Hadson Carl Street</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div>
                                    <span className="icon-clock-o text-white h2 d-block" />
                                    <h2>Service Times</h2>
                                    <p className="mb-0">Wednesdays at 6:30PM - 7:30PM <br />
                                        Fridays at Sunset - 7:30PM <br />
                                        Saturdays at 8:00AM - Sunset</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div>
                                    <span className="icon-comments text-white h2 d-block" />
                                    <h2>Get In Touch</h2>
                                    <p className="mb-0">Email: info@yoursite.com <br />
                                        Phone: (123) 3240-345-9348 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="footer-heading mb-4 text-white">About</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
                                <p><a href="#" className="btn btn-primary pill text-white px-4">Read More</a></p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                                        <ul className="list-unstyled">
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Approach</a></li>
                                            <li><a href="#">Sustainability</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="footer-heading mb-4 text-white">Ministries</h3>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Children</a></li>
                                            <li><a href="#">Women</a></li>
                                            <li><a href="#">Bible Study</a></li>
                                            <li><a href="#">Church</a></li>
                                            <li><a href="#">Missionaries</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                                <div className="col-md-12">
                                    <p>
                                        <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook" /></a>
                                        <a href="#" className="p-2"><span className="icon-twitter" /></a>
                                        <a href="#" className="p-2"><span className="icon-instagram" /></a>
                                        <a href="#" className="p-2"><span className="icon-vimeo" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <p>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    © 2023 TechDoozy. All Rights Reserved
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>

            {/* Whatsapp sticky thing */}
                <div className="mystickyelements-fixed mystickyelements-position-left mystickyelements-position-screen-center mystickyelements-position-mobile-left mystickyelements-on-hover mystickyelements-size-medium mystickyelements-mobile-size-medium mystickyelements-entry-effect-slide-in mystickyelements-templates-default entry-effect" style={{ transition: 'all 0s ease 0s' }}>
                    <div className="mystickyelement-lists-wrap">
                        <ul className="mystickyelements-lists mysticky">
                            <li className="mystickyelements-minimize ">
                                <span className="mystickyelements-minimize minimize-position-left minimize-position-mobile-left" style={{ background: '#000000' }}>
                                    <IconContext.Provider value={{ color: "#fff" }}><FaArrowLeftLong />	</IconContext.Provider>							</span>
                            </li>
                            <li id="mystickyelements-social-whatsapp" className="mystickyelements-social-icon-li mystickyelements-social-whatsapp element-desktop-on element-mobile-on">
                                <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                <span className="mystickyelements-social-icon social-whatsapp social-custom" data-tab-setting="hover" data-click={0} data-mobile-behavior="disable" data-flyout="disable" style={{ background: '#0e7f20' }}>
                                    <a href="https://api.whatsapp.com/send?phone=91%208075145381" target="_blank" rel="noopener" data-url="https://api.whatsapp.com/send?phone=91%208075145381" data-tab-setting="hover" data-mobile-behavior="disable" data-flyout="disable">
                                        <FaWhatsapp className="fab" />
                                    </a>
                                </span>
                                <span className="mystickyelements-social-text " style={{ background: '#0e7f20' }}>
                                    <a href="https://api.whatsapp.com/send?phone=91%208075145381" target="_blank" rel="noopener" data-tab-setting="hover" data-flyout="disable">
                                        WhatsApp																					</a>
                                </span>
                            </li>
                            <li id="mystickyelements-social-phone" className="mystickyelements-social-icon-li mystickyelements-social-phone element-desktop-on element-mobile-on">
                                <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                <span className="mystickyelements-social-icon social-phone social-custom" data-tab-setting="hover" data-click={0} data-mobile-behavior="disable" data-flyout="disable" style={{ background: 'rgb(43, 125, 239)', borderBottomRightRadius: '10px' }}>
                                    <a href="tel:+91%209526435000" data-url="tel:+91%209526435000" data-tab-setting="hover" data-mobile-behavior="disable" data-flyout="disable">
                                        <FaPhoneAlt className="fa" />
                                    </a>
                                </span>
                                <span className="mystickyelements-social-text " style={{ background: '#2b7def' }}>
                                    <a href="tel:+91%209526435000" data-tab-setting="hover" data-flyout="disable">
                                        Phone																					</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
        </>

        //     <div className="home">
        //         <div className="slide-one-item home-slider owl-carousel">
        //     <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/hero_1.jpg)'}} data-aos="fade" data-stellar-background-ratio="0.5">
        //       <div className="container">
        //         <div className="row align-items-center justify-content-center">
        //           <div className="col-md-7 text-center" data-aos="fade">
        //             <h1 className="mb-2">Welcome To Suites</h1>
        //             <h2 className="caption">Hotel &amp; Resort</h2>
        //           </div>
        //         </div>
        //       </div>
        //     </div>  
        //     <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/hero_2.jpg)'}} data-aos="fade" data-stellar-background-ratio="0.5">
        //       <div className="container">
        //         <div className="row align-items-center justify-content-center">
        //           <div className="col-md-7 text-center" data-aos="fade">
        //             <h1 className="mb-2">Unique Experience</h1>
        //             <h2 className="caption">Enjoy With Us</h2>
        //           </div>
        //         </div>
        //       </div>
        //     </div> 
        //     <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/hero_3.jpg)'}} data-aos="fade" data-stellar-background-ratio="0.5">
        //       <div className="container">
        //         <div className="row align-items-center justify-content-center">
        //           <div className="col-md-7 text-center" data-aos="fade">
        //             <h1 className="mb-2">Relaxing Room</h1>
        //             <h2 className="caption">Your Room, Your Stay</h2>
        //           </div>
        //         </div>
        //       </div>
        //     </div> 
        //   </div>
        //     </div>
    )
}

export default Home