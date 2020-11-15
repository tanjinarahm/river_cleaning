import React from 'react'
import css from './index.css'
import kitchen from '../../img/kitchen.png'
import shield from '../../img/shield-icon.svg'
import award from '../../img/award.svg'
import messages from '../../img/messages.svg'
import clipboard from '../../img/clipboard.svg'

const WhySection = () => {
    return (
        <>
        <div className="bg">

            <div className="why-container">
                <div className="why-wrapper">
                    <h1 className="why-h1"><span>Why</span> River Cleaning Services</h1>
                    <div className="why-content">
                        <div className="why-section">
                            <img src={shield} alt=""/>
                            <h3>Reliable</h3>
                            <p>You can count on us to arrive on time and ready to work with the right supplies.</p>
                        </div>
                        <div className="why-section">
                            <img src={award} alt=""/>
                            <h3>10+ Years of Experience</h3>
                            <p> We know how to take care of homes and make our customers happy.</p>
                        </div>
                        <div className="why-section">
                            <img src={messages} alt=""/>
                            <h3>Easy Communication</h3>
                            <p> We are just one message away! Fill out the contact form and we will get back to you ASAP.</p>
                        </div>
                        <div className="why-section">
                            <img src={clipboard} alt=""/>
                            <h3>Quality Control</h3>
                            <p>All services are double checked to ensure that you are satisfied with our work.</p>
                        </div>
                    </div>
                </div>
                <img src={kitchen} alt="kitchen image" className="kitchen-joint"/>
            </div>

        </div>
        </>
    )
}

export default WhySection
