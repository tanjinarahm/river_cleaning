import React from 'react'
import css from './index.css'
import logo from '../../img/river-logo.svg'
import facebook from '../../img/facebook.svg'
import insta from '../../img/insta.svg'
import twitter from '../../img/twitter.svg'
import arrow from '../../img/small-arrow.svg'
import clock from '../../img/footer-clock.svg'
import location from '../../img/footer-location.svg'
import mail from '../../img/footer-mail.svg'
import phone from '../../img/footer-phone.svg'


const Footer = () => {
    return (
        <>
           <div className="footer-container">
               <div className="footer-wrap">
                    <img src={logo} alt="logo" id="footer-logo"/>

                    <div className="footer-services">
                        <h3>Services</h3>
                        <p><img src={arrow} alt=""/> One Time Cleaning </p>
                        <p><img src={arrow} alt=""/> Recurring Cleaning </p>
                        <p><img src={arrow} alt=""/> Occasional Cleaning </p>
                        <p><img src={arrow} alt=""/> Move In/Out Cleaning </p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p><img src={clock} alt=""/> Mon-Fri: 8am-6pm</p>
                        <p><img src={phone} alt=""/> +1 571 501 2925</p>
                        <p><img src={mail} alt=""/> rivercleaningsvcs@gmail.com</p>
                        <p><img src={location} alt=""/> Northern Virginia</p>
                    </div>

                    <div className="footer-links">
                        <h3>Links</h3>
                        <p><a href="">Home</a></p>
                        <p><a href="">About</a></p>
                        <p><a href="">Services</a></p>
                        <p><a href="">Contact</a></p>
                    </div>
               </div>
                    <div className="footer-bottom">
                        <div className="footer-socials">
                            <a href=""><img src={twitter} alt=""/></a>
                            <a href=""><img src={insta} alt=""/></a>
                            <a href=""><img src={facebook} alt=""/></a>
                        </div>
                        <p className="copyright"> &copy; Copyright River Cleaning Services 2020</p>
                    </div>

            </div> 
        </>
    )
}

export default Footer
