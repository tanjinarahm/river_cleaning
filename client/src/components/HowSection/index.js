import React from 'react'
import css from './index.css'
import { } from './HowElements'
import calendar from '../../img/calendar.svg'
import like from '../../img/Icon-Like.svg'
import clock from '../../img/blue-clock.svg'

const HowSection = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                        <div className="cards">
                            <div className="card">
                                <img src={clock} alt="" className="how-icons"/>
                                <h4>Book an appointment</h4>
                                <p>Tell us about you and your home. Request an estimate and schedule a visit!</p>
                            </div>
                            <div className="card">
                                <img src={clock} alt=""  className="how-icons"/>
                                <h4>Let us clean</h4>
                                <p>Our team will arrive on time and wipe away all of life’s messes.</p>
                            </div>
                            <div className="card">
                                <img src={like} alt=""  className="how-icons"/>
                                <h4>Sit back and relax</h4>
                                <p>Come home to a clean, dust free, and more importantly stress free home.</p>
                            </div>
                        </div>
                    
                </div>
            </div> 
        </>
    )
}

export default HowSection
