import { SIGNIN } from '../actions/types.js';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/types.js';

const initialState = {
    token: null,
    isLoggedin: false
}

const auth  = (state = initialState, action) => {
    switch(action.type) {
        case SIGNIN:
            return {
                ...state,
                isLoggedin: action.payload,
                token: localStorage.getItem('token')
            }
        default:
            return state
    }
}

export default auth;