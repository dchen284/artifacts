import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviews, deleteReview } from '../../store/reviews';
import './Review.css';


function SingleReview() {
    // const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteReview(id));
        dispatch(getReviews())
    }

    const openForm = () => {
        document.getElementById("myForm").style.display = 'block';
    }

    const closeForm = () => {
        document.getElementById("myForm").style.display = 'none';
    }


    return (
        <div className='outer-div'>
            <div>
                {reviews.map((review) =>
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
                        <button className='open-edit-form' onClick={openForm()}>Edit Review</button>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(review.id)}>Delete Review</button>
                    </div>
                    <div className='form-popup' id='myForm'>

                    </div>
                </div>)}
            </div>
        </div>
    )

}

export default SingleReview;