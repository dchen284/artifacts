import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory , useParams} from 'react-router-dom';
import { getReviews, deleteReview } from '../../store/reviews';
import UpdateReviewForm from './UpdateReviewForm';
import './ReviewForm.css';

function ShowEditReview({ review }) {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
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
        <div>
            <div className='reviewsAll' key={review.id}>
                    <li>ID: {review.id}</li>
                    <li>Rating: {review.rating}</li>
                    <li>{review.content}</li>
                    <li>User ID: {review.userId}</li>
                    <li>Product ID: {review.productId}</li>
                    <div>
                        <button onClick={() => history.push(`/reviews/review_form/${review.productId}`)}>Review Form</button>
                    </div>
                    <div>
                        {user.id == review.userId &&
                        <button className='open-edit-form' onClick={openForm}>Edit Review</button>
                        }
                    </div>
                    <div>
                        {user.id == review.userId &&
                        <button onClick={() => handleDelete(review.id)}>Delete Review</button>
                        }
                    </div>
                {showForm && (
                    <UpdateReviewForm reviewId={review.id} />
                )}
                </div>
        </div>
    )

}

export default ShowEditReview;