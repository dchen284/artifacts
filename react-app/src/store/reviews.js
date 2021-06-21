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
    if(res.ok) {
        const reviews = await res.json();
        dispatch(loadReviews(reviews.reviews));
        return res;
    }
}

export const createReview = (review) => async (dispatch) => {
    const { rating, content, userId, productId } = review;
    const res = await fetch(`/api/reviews/${review.id}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            rating,
            content
        })
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addReview(data.reviews));
        return data;
    }
}

// reducers

const initialState = {}

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = {};
            action.reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState
        case ADD_REVIEW:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState
        default:
            return state;
    }
}

export default reviewsReducer;