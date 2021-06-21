const LOAD_REVIEWS = 'review/loadReviews';
const ADD_REVIEW = 'review/addReview';
const EDIT_REVIEW = 'review/editReview';
const REMOVE_REVIEW = 'review/removeReview';

const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

const editReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

const removeReview = (id) => {
    return {
        type: REMOVE_REVIEW,
        id
    }
}

// THUNKS

export const getReviews = () => async (dispatch) => {
    const res = await fetch('/api/reviews');
    console.log(res)
    if(res.ok) {
        const reviews = await res.json();
        dispatch(loadReviews(reviews));
        return res;
    }
}

// reducers

const initialState = {}

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            const allReviews = {};
            action.reviews.forEach((review) => {
                allReviews[review.id] = review;
            });
            return allReviews
        default:
            return state;
    }
}

export default reviewsReducer;