import React from 'react'
import css from './index.css'
import river from '../../img/review-river.svg'
import StarRating from '../StarRating'

const Reviewform = () => {
    return (
        <>
            <div className="reviewform-all">


                <div className="reviewform-h1">
                    <div className="reviewform-h1-wrap">
                        <h1>Leave a review</h1>
                    </div>
                </div>


                <div className="reviewform-container">

                    <img src={river} className="review-river"/>
                    
                    <div className="reviewform-wrap">

                        <form action="" className="review-form">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name"/>
                            </div>
                            
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email"/>
                            </div>
                            <div>
                                <label htmlFor="rating">Rating</label>
                                <StarRating/>
                                {/* <input type="text" name="rating"/> */}
                            </div>


                            <div className="message-div">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="review-message" cols="30" rows="10"></textarea>
                            </div>

                            <input type="submit" value="Submit Review" class="review-btn"/>
                        </form>

                    </div>
                </div>



            </div>
            
        </>
    )
}

export default Reviewform
