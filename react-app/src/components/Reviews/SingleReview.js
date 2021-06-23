import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviews, deleteReview } from '../../store/reviews';
import './ReviewForm.css';


function SingleReview() {
    // const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);
    

    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteReview(id));
        dispatch(getReviews())
    }

    const openForm = () => {
        setShowForm(!showForm)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
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
                        <button className='open-edit-form' onClick={openForm}>Edit Review</button>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(review.id)}>Delete Review</button>
                    </div>
                    {showForm && (
                    <div className='form-popup' id='myForm'>
                        <form className='review-edit-form' onSubmit={handleSubmit}>
                            <h2>Edit Your Review</h2>
                            <div className="rate">
                                <input type="radio" id="star5" name="rate" value="5" onChange={(e) => setRating(e.target.value)}/>
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" onChange={(e) => setRating(e.target.value)} />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" onChange={(e) => setRating(e.target.value)} />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" onChange={(e) => setRating(e.target.value)} />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" onChange={(e) => setRating(e.target.value)} />
                                <label htmlFor="star1" title="text">1 star</label>
                            </div>
                            <br></br>
                            <br></br>
                            <div className='review-box'>
                                <textarea placeholder='Your Review' rows='10' cols='50' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                            </div>
                            <button type='submit' className='submit-button'>Submit</button>
                        </form>
                    </div>
                    )}
                </div>)}
            </div>
        </div>
    )

}

export default SingleReview;