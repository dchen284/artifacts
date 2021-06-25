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
        review
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
    const res = await fetch('/api/reviews/');
    if(res.ok) {
        const reviews = await res.json();
        dispatch(loadReviews(reviews.reviews));
        return res;
    }
}

export const createReview = (review) => async (dispatch) => {
    const { rating, content, userId, productId } = review;

    const formData = new FormData();
    formData.append('rating', rating);
    formData.append('content', content);
    formData.append('userId', userId);
    formData.append('productId', productId);

    const res = await fetch(`/api/reviews/new_review`, {
        method: "POST",
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addReview(data));
        return data;
    }
}

export const updateReview = ({id, rating, content, userId, productId }) => async (dispatch) => {

    const formData = new FormData();
    formData.append('rating', rating);
    formData.append('content', content);
    formData.append('userId', userId);
    formData.append('productId', productId);

    const res = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: formData
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(editReview(data));
        return data
    }
}


export const deleteReview = (id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeReview(id))
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
            newState[action.review.id] = action.review;
            return newState
        case EDIT_REVIEW:
            return {
                ...state,
                [action.review.id]: action.review
            }
        case REMOVE_REVIEW:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default reviewsReducer;