import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import './Review.css';


function SingleReview() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);
    const currentState = useSelector(state => console.log(state))
    currentState()
    console.log(reviews)

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])


    return (
        <div class='outer-div'>
            <div>
                <li>{reviews.map((review) => review.content)}</li>
            </div>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
            </div>
        </div>
    )

}

export default SingleReview;