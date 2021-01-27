import React from 'react'
import css from './index.css'
import img1 from '../../img/img1.JPG'
import img2 from '../../img/img2.JPG'
import img3 from '../../img/img3.JPG'
import img4 from '../../img/img4.JPG'
import img5 from '../../img/img5.JPG'
import img6 from '../../img/img6.JPG'
import img7 from '../../img/img7.JPG'
import landing from '../../img/landing.jpg'

const GalleryPg = () => {
    return (
        <>
            <div className="gallerypage-all">

                <div className="gallerypage-h1">
                    <div className="gallerypage-h1-wrap">
                        <h1>Gallery</h1>
                    </div>
                </div>

                <div className="gallerypage">
                    <div className="gallerypage-cards">
                       
                            <img src={img1} alt="" className="gallery-img"/>
                            <img src={img2} alt="" className="gallery-img"/>
                            <img src={img3} alt="" className="gallery-img"/>

                            <img src={landing} alt="" className="gallery-img"/>

                            <img src={img4} alt="" className="gallery-img"/>

                            <img src={landing} alt="" className="gallery-img"/>

                            <img src={img5} alt="" className="gallery-img"/>
                            <img src={img6} alt="" className="gallery-img"/>
                            <img src={landing} alt="" className="gallery-img"/>
                            <img src={img7} alt="" className="gallery-img"/>
                            <img src={img7} alt="" className="gallery-img"/>
                            <img src={img7} alt="" className="gallery-img"/>

                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default GalleryPg
