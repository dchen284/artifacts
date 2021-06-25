import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../store/reviews';
import ReviewShowForm from './ReviewShowForm'
import ReviewForm from './ReviewForm';
import './ReviewForm.css';
import './ReviewFormPopUp.css'



function SingleReview() {
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);
    const { productId } = useParams()

    const productIdInteger = parseInt(productId, 10)

    const [showForm, setShowForm] = useState(false);
    const [showButton, setButton] = useState(true);

    const openForm = () => {
        setShowForm(!showForm)
        setButton(!showButton)
    }

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    return (
        <div className='outer-div'>
                    <button className='new-review' onClick={openForm}>Write A Review</button>
                    {showForm &&
                        <ReviewForm openForm={openForm}/>
                    }
                <h2 className='reviews-h2'>Reviews</h2>
                <br></br>
                {reviews.map((review) =>
                    (productIdInteger === review.productId ?
                        <ReviewShowForm review={review} key={review.id}/> : null
                    )
                )}
        </div>
    )

}

export default SingleReview;