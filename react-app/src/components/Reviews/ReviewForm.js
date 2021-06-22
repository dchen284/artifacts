import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview, getReviews } from '../../store/reviews';
import './ReviewForm.css'


function ReviewForm() {
const dispatch = useDispatch();
const history = useHistory();
const reviewState = useSelector(state => state.reviews)
const reviews = Object.values(reviewState);
const user = useSelector(state => state.session.user);
const { id } = useParams()

const [rating, setRating] = useState(0);
const [content, setContent] = useState('');
const [errors, setErrors] = useState([]);

useEffect(() => {
    dispatch(getReviews())
}, [dispatch])

const handleSubmit = async (e) => {
    e.preventDefault()

    const review = {
        rating,
        content,
        userId: user.id,
        productId: id
        }
    
        let createdReview = await dispatch(createReview(review))
        if (createdReview) {
            history.push(`/reviews`);
        }
    }

return (
    <div className='form-container'>
        <form className='review-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h2>Write Your Review</h2>
            <div className="rate">
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
        </form>
    </div>
)
}

export default ReviewForm;