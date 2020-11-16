import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HowSection from '../components/HowSection'
import ServicesSection from '../components/ServicesSection'
import WhySection from '../components/WhySection'
import ReviewsSection from '../components/ReviewsSection'
import ContactSection from '../components/ContactSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <HowSection/>
            <AboutSection/>
            <ServicesSection/>
            <WhySection/>
            <ReviewsSection/>
            <ContactSection/>
        </>
    );
};

export default Home
