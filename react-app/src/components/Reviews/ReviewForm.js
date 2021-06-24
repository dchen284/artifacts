import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview, getReviews } from '../../store/reviews';
import './ReviewForm.css'
import './ReviewFormPopUp.css'


function ReviewForm({ openForm }) {
const dispatch = useDispatch();
const history = useHistory();
const user = useSelector(state => state.session.user);
const { productId } = useParams()

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
        productId
        }

        let createdReview = await dispatch(createReview(review))
        if (createdReview) {
            history.push(`/products/${productId}`);
        }
    }

return (
        <form className='review-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <br></br>
            <h2 className='review-header'>Leave Us Your Feedback</h2>
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
            <button className='cancel-button' onClick={openForm}>Cancel</button>
            <br></br>
        </form>
)
}

export default ReviewForm;