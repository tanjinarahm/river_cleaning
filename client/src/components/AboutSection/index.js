import React, { useState } from 'react'
import { 
    AboutContainer, 
    AboutWrapper, 
    CallUs, 
    AboutH1, 
    AboutP1, 
    AboutP2, 
    AboutP3, 
    PCall } 
from './AboutElements'
import css from './index.css'



const AboutSection = () => {
    return (
        <>
            <AboutContainer className="about" id="about">
               <AboutWrapper>
                   {/* <AboutImage src={about} type="img">
                   </AboutImage> */}
                    <AboutH1>About <span className="us">Us</span> </AboutH1>
                    <AboutP1>
                        We are the most professional cleaning service in the Northern Virginia area. We work hard to ensure our customers are not just satisfied with our service, but completely ecstatic with it.
                    </AboutP1>
                    <AboutP2>
                        River Cleaning Services strives to provide our customers with the best quality of service ensuring everything is cleaned the way you want it done, on time, every time.
                    </AboutP2>
                    <AboutP3>
                        Contact us today for your cleaning needs!
                    </AboutP3>
               </AboutWrapper>
            </AboutContainer>
            {/* <CallUs>
                   <PCall>
                        Call us at: <a href="tel:+15715012925" class="number">571 501 2925</a>
                   </PCall>
            </CallUs> */}
        </>
    )
}

export default AboutSection
