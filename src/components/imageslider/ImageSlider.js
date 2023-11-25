import React, { useState } from 'react';
import { SliderData } from './Sliderdata';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

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
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/hero_1.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade">
                                <h1 className="mb-2">IEEE Academic Live Projects</h1>
                                <h2 className="caption">B.E | M.Tech | BCA | MCA | BBA | MBA | Diploma</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default ImageSlider;