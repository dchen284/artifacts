import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviews } from '../../store/reviews';
import './ReviewForm.css';

import ReviewShowForm from './ReviewShowForm'


function SingleReview() {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    return (
        <div className='outer-div'>
            <div>
                {reviews.map((review) =>
                    <ReviewShowForm review={review}/>
                )}
            </div>
        </div>
    )

}

export default SingleReview;