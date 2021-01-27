import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useMediaQuery} from './hooks';
import img1 from '../../img/img1.JPG'
import img2 from '../../img/img2.JPG'
import img3 from '../../img/img3.JPG'
import img4 from '../../img/img4.JPG'
import img5 from '../../img/img5.JPG'
import img6 from '../../img/img6.JPG'
import img7 from '../../img/img7.JPG'



let styles = {
    'margin': 'right',
    'max-width': '900px',
    'display': 'block',
    'position': 'relative'
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
    'padding': '2rem 0'
}

let wrap = {
    'max-width': '1400px',
    'margin': '0 auto',
    'padding': '2rem 2rem',
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
    'right': '1rem',
    'bottom': '1rem',
}




const GallSection = () => {
      
    const isResponsive = useMediaQuery('(max-width: 900px)');
    // render() {
        return (
            <div style={container}>
                <div style={wrap}>
                    <h1 style={title}>Our Gallery</h1>
                    <p style={ptag}>Check out some of the houses we have cleaned!</p>

                    {/* <div style={tworows}> */}
                        <div style={styles}>
                            {/* <div className="carousel-wrap"> */}
                                <Carousel infiniteLoop useKeyboardArrows autoPlay >
                                    <div>
                                        <img src={img1} />
                                    </div>
                                    <div>
                                        <img src={img2} />
                                    </div>
                                    <div>
                                        <img src={img3} />
                                    </div>
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
                                    <a style={view_gallery} href="/gallery">View Gallery</a>
                            
                        </div>
                    {/* </div> */}
                        {/* </div> */}

                </div>
            </div>
    
        );
    // }

    
}


export default GallSection