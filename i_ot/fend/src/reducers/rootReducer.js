// auth reducer
import { combineReducers } from 'redux';

import auth from "./authReducer";
import ts_data from "./ts_dataReducer"


const rootReducer = combineReducers({
    auth: auth,
    ts_data,
});

export default rootReducer;
