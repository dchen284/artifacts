import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory , useParams} from 'react-router-dom';
import { updateReview } from '../../store/reviews';
import './ReviewForm.css';
import './ReviewFormPopUp.css'

function UpdateReviewForm({ reviewId, openForm, review }) {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);
    const { productId } = useParams()

    const [rating, setRating] = useState(review.rating);
    const [content, setContent] = useState(review.content);

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
        //console.log(review)
        let updatedReview = await dispatch(updateReview(review))
        if(updatedReview) {
            openForm()
            history.push(`/products/${productId}`)
        }
    }

    return (
        <div>
        <br></br>
        <br></br>
        <form className='review-edit-form' onSubmit={handleSubmit}>
            <br></br>
            <h2 className='edit-form-title'>Edit Your Review</h2>
            <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" onChange={(e) => setRating(+e.target.value)} checked={rating===5} />
                <label htmlFor="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" onChange={(e) => setRating(+e.target.value)} checked={rating===4} />
                <label htmlFor="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" onChange={(e) => setRating(+e.target.value)} checked={rating===3} />
                <label htmlFor="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" onChange={(e) => setRating(+e.target.value)} checked={rating===2} />
                <label htmlFor="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" onChange={(e) => setRating(+e.target.value)} checked={rating===1} />
                <label htmlFor="star1" title="text">1 star</label>
            </div>
            <br></br>
            <div className='review-box-edit'>
                <textarea rows='10' cols='50' value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            </div>
            <button type='submit' className='submit-button-edit'>Submit</button>
            <button className='cancel-button-edit' onClick={openForm}>Cancel</button>
            <br></br>
            <br></br>
        </form>
    </div>
    )
}

export default UpdateReviewForm;