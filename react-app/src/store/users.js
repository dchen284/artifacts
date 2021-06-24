const LOAD_USERS = "session/LOAD_USERS";

const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        users
    }
}

export const getUsers = () => async (dispatch) => {
    const res = await fetch('/api/users');

    if(res.ok) {
        const users = await res.json();
        dispatch(loadUsers(users.users));
        return res;
    }
}

const initialState = {}

export default function usersReducer( state = initialState, action) {
    let newState;  
    switch(action.type){
            case LOAD_USERS:
                newState = {};
                action.users.forEach((user) => {
                newState[user.id] = user;
                });
                return newState
            default:
                return state;
        }
}
