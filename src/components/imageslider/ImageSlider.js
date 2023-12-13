import React, { useState, useEffect } from 'react';
import { SliderData } from './Sliderdata';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // The useEffect Hook allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    useEffect(() => {
        const timeout = setTimeout(() => {
          nextSlide();
        }, 3000);
    
        return () => {
          clearTimeout(timeout);
        };
    },[current]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })} */}
            <div className="slide-one-item home-slider owl-carousel">
                {SliderData.map((slide, index) => {
                    return (
                        <div className={"owl-item site-blocks-cover overlay " + (index === current ? 'active' : '')} style={{ backgroundImage: `url(${slide.image})` }} data-aos="fade" data-stellar-background-ratio="0.5">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 text-center" data-aos="fade">
                                        <h1 className="mb-2">{slide.title}</h1>
                                        <h2 className="caption">{slide.subtitle}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav">
                                <div className="owl-prev">
                                    <span className="icon-arrow_back"  onClick={prevSlide}><FaArrowLeft /></span>
                                </div>
                                <div className="owl-next">
                                    <span className="icon-arrow_forward" onClick={nextSlide} ><FaArrowRight /></span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>





            {/* <div className="slide-one-item home-slider owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: 'translate3d(-5760px, 0px, 0px)', transition: 'all 0s ease 0s', width: '10080px' }}>
                        <div className="owl-item cloned" style={{ width: '1440px' }}>
                            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_2.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 text-center aos-init" data-aos="fade">
                                            <h1 className="mb-2">Unique Experience</h1>
                                            <h2 className="caption">Enjoy With Us</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: '1440px' }}>
                            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_3.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 text-center aos-init" data-aos="fade">
                                            <h1 className="mb-2">Relaxing Room</h1>
                                            <h2 className="caption">Your Room, Your Stay</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: '1440px' }}>
                            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_1.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 text-center aos-init" data-aos="fade">
                                            <h1 className="mb-2">Welcome To Suites</h1>
                                            <h2 className="caption">Hotel &amp; Resort</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: '1440px' }}>
                            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_2.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 text-center aos-init" data-aos="fade">
                                            <h1 className="mb-2">Unique Experience</h1>
                                            <h2 className="caption">Enjoy With Us</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '1440px' }}>
                            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_3.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 text-center aos-init" data-aos="fade">
                                            <h1 className="mb-2">Relaxing Room</h1>
                                            <h2 className="caption">Your Room, Your Stay</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: '1440px' }}><div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_1.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 text-center aos-init" data-aos="fade">
                                        <h1 className="mb-2">Welcome To Suites</h1>
                                        <h2 className="caption">Hotel &amp; Resort</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: '1440px' }}>
                            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url("images/hero_2.jpg")', backgroundPosition: '50% -25px' }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 text-center aos-init" data-aos="fade">
                                            <h1 className="mb-2">Unique Experience</h1>
                                            <h2 className="caption">Enjoy With Us</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-nav">
                    <div className="owl-prev">
                        <span className="icon-arrow_back" />
                    </div>
                    <div className="owl-next">
                        <span className="icon-arrow_forward" />
                    </div>
                </div>
                <div className="owl-dots">
                    <div className="owl-dot">
                        <span />
                    </div>
                    <div className="owl-dot">
                        <span />
                    </div>
                    <div className="owl-dot active">
                        <span />
                    </div>
                </div>
            </div> */}
        </section>
    );

};

export default ImageSlider;