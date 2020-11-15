import React, { useState } from 'react'
import { IconContext } from "react-icons";
import landing from '../../img/landing.jpg'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {HowBtn, ContactBtn} from '../ButtonElement'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            {/* <HeroBg>
                <ImageBg src={landing} type="img" />
            </HeroBg> */}
            <HeroContent>
                <HeroH1>
                    We clean so you can relax
                </HeroH1>
                <HeroP> Call us today and let us clean your home while you can relax! </HeroP>
                <IconContext.Provider value={{ size: '16px' }}>
                <HeroBtnWrapper>
                    <ContactBtn to='contact' dark="true">Contact us</ContactBtn>
                    <HowBtn to='how' onMouseEnter={onHover} onMouseLeave={onHover}  >Why us{hover ? <ArrowForward/> : <ArrowRight/>}</HowBtn>
                </HeroBtnWrapper>
                </IconContext.Provider>
            </HeroContent>
            <HeroBg>
                <ImageBg src={landing} type="img" />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection 
