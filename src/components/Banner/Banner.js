import React from 'react';
import './Banner.css'
import bannerImg_1 from '../../Assets/Images/banner1.jpg'
import bannerImg_2 from '../../Assets/Images/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <div id="bannerExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#bannerExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#bannerExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerImg_1} className="d-block" alt="banner-img_1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Have FUN on journey</h1>
                            <h4>A peacefull Journey With Reasonable fare</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImg_2} className="d-block w-100" alt="banner-img_2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>24/7 Hours Service</h1>
                            <h4>24 hours service run with honesty.</h4>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bannerExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;