import React from 'react'
import css from './index.css'
import arrow from '../../img/arrow.svg'
import phone from '../../img/phony.png'
import { QuoteContainer } from './ServicesPageElements'

const ServicesPg = () => {
    return (

        <div className="servicespage-all">
            <div className="servicespage-h1">
                <div className="servicespage-h1-wrap">
                    <h1>Services</h1>
                </div>
            </div>
            <div className="servicespage">
            
                    <div className="servicespg-cards">

                        <div className="service-card">
                            <h3>One Time Cleaning</h3>
                            <p className="service-desc">Don’t want to commit to a recurring cleaning services? This is perfect for when life gets too stressful and cleaning your house becomes too much of a hassle.</p>
                            <a href="" className="book-arrow-service">  <img src={arrow} className="service-arrow"/> Book Now</a>
                        </div>
                        <div className="service-card">
                            <h3>Recurring Cleaning</h3>
                            <p className="service-desc">Choose from our 3 options: weekly, bi-weekly, or monthly cleaning. You can have appointments made in advance  so you don’t have to worry about cleaning your home</p>
                            <a href="" className="book-arrow-service"> <img src={arrow} className="service-arrow"/> Book Now</a>
                        </div>
                        <div className="service-card">
                            <h3>Move in/out Cleaning</h3>
                            <p className="service-desc">Want a professional clean before you move into your new place? Let us take care of the cleaning so you can spend more time preparing for the move.</p>
                            <a href="" className="book-arrow-service"> <img src={arrow} className="service-arrow"/> Book Now</a>
                        </div>
                        <div className="service-card">
                            <h3>Special Occasion</h3>
                            <p className="service-desc">Cleaning when you need it – whether you are expecting company or just hosted a party, our occasional cleaning service gets your home in tip-top shape.</p>
                            <a href="" className="book-arrow-service"> <img src={arrow} className="service-arrow"/> Book Now</a>
                        </div>
                    
                    </div>

            </div>
            <div className="quote-container">
                <div className="quote">
                    <h2>Request a quote today</h2>
                    <p class="quote-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iusto iste veritatis repudiandae recusandae beatae dolores blanditiis magni, quis, adipisci unde ullam facilis error alias tempore. Sapiente totam nihil ad?</p>
                    <div className="book-visit">
                        
                        <p>
                            <a className="bookvisit-btn" href="/"> Book a Visit </a> 
                            <span className="or">OR</span>
                            <span className="sp-call">Call us at:
                            <span className="sp-number">571 288 4243</span></span>
                        </p>

                    </div>
                </div>
                {/* <div className="quote-background">
                    <img src={phone} alt="phone" className="quote-img"/>
                </div> */}
            </div >
        </div>
    )
}

export default ServicesPg
