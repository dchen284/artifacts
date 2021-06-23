import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory , useParams} from 'react-router-dom';
import { updateReview } from '../../store/reviews';
import './ReviewForm.css';

function UpdateReviewForm({ reviewId }) {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);
    const { productId } = useParams()

    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            ...reviews,
            id: reviewId,
            rating,
            content,
            userId: user.id,
            productId
        }
        console.log(review)
        let updatedReview = await dispatch(updateReview(review))
        if(updatedReview) {
            history.push(`/products/${productId}`)
        }
    }

    return (
        <div>
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
        </div>
    )
}

export default UpdateReviewForm;