import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReview, getReviews } from '../../store/reviews';

function ReviewForm() {
const user = useSelector(state => state.session.user);
const dispatch = useDispatch();
const reviewState = useSelector(state => state.reviews)
const reviews = Object.values(reviewState);
const { id } = useParams()

useEffect(() => {
    dispatch(getReviews())
}, [dispatch])

const handleSubmit = async (e) => {
    e.preventDefault()
    const review = {
        rating,
        content,
        userId: user.id,
        projectId: id
        }
    
        await dispatch(createReview(review))
}

return (
    <div>
        
    </div>
)
}