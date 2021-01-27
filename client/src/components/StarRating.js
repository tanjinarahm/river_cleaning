import React from 'react'
import { FaStar } from 'react-icons/fa'
const StarRating = () => {
    return (
            <div>
                {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1;

                    return (
                        <label> 
                            <FaStar size={35} className="stars"/>
                            {/* <input type="radio" name="rating" value={ratingValue}/> */}
                        </label>
                    );
                })}
               
            </div>

    );
};

export default StarRating
