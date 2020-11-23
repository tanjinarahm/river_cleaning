import React from 'react'
import css from './index.css'
import arrow from '../../img/arrow-dark.svg'

const ReviewsPg = () => {




    return (
        <>
            <div className="reviewspg-all">
                <div className="reviewspage-h1">
                    <div className="reviewspage-h1-wrap">
                        <h1>Client Testimonials</h1>
                        <a className="own-review" href="/submitreview">Submit your own review <img className="reviews-arrow" src={arrow} alt=""/></a>
                        {/* <p className="own-review">Submit your own review <img className="reviews-arrow" src={arrow} alt=""/></p> */}
                    </div>
                </div>
               <div className="reviews-page">
                  <div className="reviewspg-cards">
                      <div className="reviewspg-card">
                            <div className="reviews-stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="reviews-name">-Jane Doe</p>
                        </div>
                      <div className="reviewspg-card">
                            <div className="reviews-stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="reviews-name">-Jane Doe</p>
                        </div>
                      <div className="reviewspg-card">
                            <div className="reviews-stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitaur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minustibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="reviews-name">-Jane Doe</p>
                        </div>
                      <div className="reviewspg-card">
                            <div className="reviews-stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.ur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minusur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="reviews-name">-Jane Doe</p>
                        </div>
                      <div className="reviewspg-card">
                            <div className="reviews-stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="reviews-name">-Jane Doe</p>
                        </div>
                      <div className="reviewspg-card">
                            <div className="reviews-stars"></div>
                            <h3><span>Service:</span> One Time Cleaning</h3>
                            <p  className="reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi in dolorem eveniet obcaecati ratione quisquam temporibus totam? Necessitatibus, quod totam. Illum dicta est molestiae obcaecati. Quasi eligendi magnam minus.</p>
                            <p className="reviews-name">-Jane Doe</p>
                        </div>
                  </div>
               </div>
            </div>
        </>
    )
}

export default ReviewsPg
