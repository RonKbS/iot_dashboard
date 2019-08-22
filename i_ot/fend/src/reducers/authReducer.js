import { SIGNIN, REGISTERED } from '../actions/types.js';
// import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/types.js';

const initialState = {
    token: null,
    isLoggedIn: false,
    isRegistered: false,
}

const auth  = (state = initialState, action) => {
    switch(action.type) {
        case SIGNIN:
            return (
                Object.assign(
                    {},
                    state,
                    {isLoggedIn: action.payload},
                    {token: localStorage.getItem('token')}
                )
            )
        case REGISTERED:
            return (
                Object.assign(
                    {},
                    state,
                    {isRegistered: action.payload},
                )
            )
        default:
            return state
    }
}

export default auth;