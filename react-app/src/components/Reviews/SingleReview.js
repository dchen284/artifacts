import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getReviews } from '../../store/reviews';
import ReviewShowForm from './ReviewShowForm'
import ReviewForm from './ReviewForm';
import './ReviewForm.css';
import './ReviewFormPopUp.css'



function SingleReview() {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState);
    const { productId } = useParams()

    const [showForm, setShowForm] = useState(false);
    const [showButton, setButton] = useState(true);

    const openForm = () => {
    reviews.map((review) => {
        if(user.id == review.userId) {
            setShowForm(!showForm)
        }
    })
    }

    const hideButton = () => {
        setButton(!showButton)
    }

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    return (
        <div className='outer-div'>
                <div>
                    <button className='new-review' onClick={openForm}>Write A Review</button>
                    {showForm &&
                        <ReviewForm openForm={openForm}/>
                    }
                </div>
                <h2 className='reviews-h2'>Reviews</h2>
                <br></br>
                {reviews.map((review) =>
                    (productId == review.productId ? 
                        <ReviewShowForm review={review} /> : null
                    )
                )}
        </div>
    )

}

export default SingleReview;