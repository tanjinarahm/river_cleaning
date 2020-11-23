import React from 'react'
import css from './index.css'
import arrow from '../../img/review-arrow.svg'


const ReviewsSection = () => {
    return (
        <>
            <div className="reviews-container">
                <div className="reviews-wrap">
                    <h1 className="reviews-h1"><span>River Cleaning</span> knows how to take care of its customers</h1>
                    <p className="reviews-p">Taking care of Virginians since 2008</p>
                    <div className="review-cards">
                        <div className="review-card">
                            <div className="stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="name">-Jane Doe</p>
                        </div>
                        <div className="review-card">
                            <div className="stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="name">-Jane Doe</p>
                        </div>
                        <div className="review-card">
                            <div className="stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="name">-Jane Doe</p>
                        </div>
                    </div>
                    <a href="/reviews" className="more-reviews"> More Reviews <img src={arrow} className="review-arrow" /> </a>

                </div>
            </div>
            
        </>
    )
}

export default ReviewsSection
