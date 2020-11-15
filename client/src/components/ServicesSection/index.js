import React from 'react'
import css from './index.css'
import arrow from '../../img/arrow.svg'
import {} from './ServicesElements'

const ServicesSection = () => {
    return (
        <>
            <div className="services">
                <div className="services-wrap">
                    <h1 className="services-h1">Services</h1>
                    <div className="s-cards">
                        <div className="s-card">
                            <h3>One Time Cleaning</h3>
                            <p className="s-desc">Don’t want to commit to a recurring cleaning services? This is perfect for when life gets too stressful and cleaning your house becomes too much of a hassle.</p>
                            {/* <p className="book-arrow"> <img src={arrow} className="arrow"/>  Book Now</p> */}
                            <a href="" className="book-arrow">  <img src={arrow} className="arrow"/> Book Now</a>
                        </div>
                        <div className="s-card">
                            <h3>Recurring Cleaning</h3>
                            <p className="s-desc">Choose from our 3 options: weekly, bi-weekly, or monthly cleaning. You can have appointments made in advance  so you don’t have to worry about cleaning your home</p>
                            {/* <p className="book-arrow"> <img src={arrow} className="arrow"/> Book Now</p> */}
                            <a href="" className="book-arrow"> <img src={arrow} className="arrow"/> Book Now</a>
                        </div>
                        <a href="" className="learn-more"> Learn More <img src={arrow} className="learn-arrow"/></a>
                        {/* <p className="learn-more"> Learn More <img src={arrow} className="learn-arrow"/></p> */}
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ServicesSection
