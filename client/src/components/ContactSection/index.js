import React from 'react'
import css from './index.css'
import mail from '../../img/mail.svg'
import phone from '../../img/phone.svg'
import location from '../../img/location.svg'
import river from '../../img/contact-river.svg'

const ContactSection = () => {
    return (
        <>
            <div className="contact-container contact">
                <div className="contact-wrap">
                    
                    <img src={river} alt="river-image" className="contact-river"/>
                    <div className="shiz">

                        <div className="contact-content">
                            <div className="content-one">

                                <h1 className="contact-h1">Send Us a Message</h1>
                                <p className="contact-p">Have any questions or concerns? Fill up the simple form and we will get back to you within 24 hours</p>
                                
                            </div>
                            <div className="content-two">
                                
                                <p className="contact-info"><img src={phone} alt=""/>+1 571 501 2925</p>
                                <p className="contact-info"><img src={mail} alt=""/>rivercleansvcs@gmail.com</p>
                                <p className="contact-info last"><img src={location} alt=""/>Northern Virginia</p>

                            </div>
                            
                        </div>
                        {/* <div className="contact-info">
                        </div> */}
                        <div className="contact-form">
                            <form action="submit" method="POST" className="c-form">

                                <div>
                                    <label htmlFor="name">First Name</label>
                                    <input type="text" name="firstName"/>
                                </div>

                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName"/>
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email"/>
                                </div>

                                <div>
                                    <label htmlFor="number">Number</label>
                                    <input type="text" name="number"/>
                                </div>

                                <div class="message">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                                </div>

                                {/* <input type="submit" value="Send Message"/> */}
                                <button class="contact-btn" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection
