import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, deleteReview } from '../../store/reviews';
import UpdateReviewForm from './UpdateReviewForm';
import './ReviewForm.css';

function ShowEditReview({ review }) {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);

    const [showForm, setShowForm] = useState(false);
    const [deleteButton, showDeleteButton] = useState(false);


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const openForm = () => {
    reviews.map((review) => {
        if(user.id == review.userId) {
            setShowForm(!showForm)
        }
    })
    }

    const handleDelete = async (id) => {
        reviews.map((review) => {
            if(user.id == review.userId) {
                showDeleteButton(!deleteButton)
            }
    })

        dispatch(deleteReview(id));
        dispatch(getReviews())
    }

    return (
        <div className='review-box-outer'>
            <div className='review-container' key={review.id}>
                    <h4 className='review-title'>Product ID: {review.productId}</h4>
                    <div className='review-score'>
                        <div className='score-container'>
                            <span className='score'>{review.rating}</span>
                            <span>/5</span>
                            <span className='score-stars'>
                                ⭐
                            </span>
                        </div>
                    </div>
                    <div className='review-content'>
                    <i>{review.content}</i>
                    <small>User ID: {review.userId}</small>
                    </div>
                    <div className='button-group'>
                        <div>
                            {user.id == review.userId &&
                            <button className='open-edit-form' onClick={openForm}>Edit Review</button>
                            }
                        </div>
                        <div>
                            {user.id == review.userId &&
                            <button className='delete-review-button' onClick={() => handleDelete(review.id)}>Delete Review</button>
                            }
                        </div>
                    </div>
                {showForm && (
                    <UpdateReviewForm reviewId={review.id} />
                )}
                </div>
        </div>
    )

}

export default ShowEditReview;