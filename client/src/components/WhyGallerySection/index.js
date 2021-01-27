import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useMediaQuery} from './hooks';
import css from './index.css'
import kitchen from '../../img/kitchen.png'
import shield from '../../img/shield-icon.svg'
import award from '../../img/award.svg'
import messages from '../../img/messages.svg'
import clipboard from '../../img/clipboard.svg'
import img1 from '../../img/img1.JPG'
import img2 from '../../img/img2.JPG'
import img3 from '../../img/img3.JPG'
import img4 from '../../img/img4.JPG'
import img5 from '../../img/img5.JPG'
import img6 from '../../img/img6.JPG'
import img7 from '../../img/img7.JPG'


let styles = {
    // 'margin': 'right',
    'max-width': '900px',
    'display': 'block',
    'position': 'relative',
    // container: isResponsive => ({
    // //    margin: 'left',
    //     'max-width': '900px',
    //     // 'display': 'block',
    //     margin: isResponsive ? 'auto' : 'left',
    //     // justifyContent: 'space-around'
    //   })
};

// .container(isResponsive)

let container = {
    'color': 'var(--dark)',
    // 'background': 'var(--lightest)',
    'margin-top': '2rem',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
}

let wrap = {
    // 'max-width': '1400px',
    // 'margin': '0 auto',
    // 'padding': '0 2rem',
   'padding': '0 2rem'
    // 'background': 'var(--lightest)'
}

let title = {
    'margin-bottom': '0.65rem'
}
let ptag = {
    'margin-bottom': '2rem'
}


let view_gallery = {
    'position': 'absolute',
    'right': '1.25rem',
    'bottom': '.2rem',
    'text-decoration': 'none',
    'color': 'white',
    'background': 'var(--dark)',
    'padding': '1rem 2rem',
    'height': '62.5px',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center'

    // 'border': '1px solid white'

}



const WhyGallerySecction = () => {
    const isResponsive = useMediaQuery('(max-width: 900px)');
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

                    <div style={container}>
                        <div style={wrap}>
                            {/* <div style={tworows}> */}
                                <div style={styles}>
                                    {/* <div className="carousel-wrap"> */}
                                        <Carousel infiniteLoop useKeyboardArrows autoPlay >
                                            <div>
                                                <img src={img4} />
                                            </div>
                                            <div>
                                                <img src={img5} />
                                            </div>
                                            <div>
                                                <img src={img6} />
                                            </div>
                                            <div>
                                                <img src={img7} />
                                            </div>
                                        
                                        </Carousel>
                                            {/* <a style={view_gallery} href="/gallery">View Gallery</a> */}
                                    
                                {/* </div> */}
                            </div>
                                {/* </div> */}

                        </div>
                    </div>
                    







                </div>

            </div>
        </>
    )
}

export default WhyGallerySecction
