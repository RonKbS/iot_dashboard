import { GET_GRAPH_DATA_SUCCESS } from '../actions/types.js';

const initialState = {
    graphData: null
}

const ts_data  =
 (state = initialState, action) => {
    switch(action.type) {
        case GET_GRAPH_DATA_SUCCESS:
            return {
                ...state,
                graphData: action.payload
            }
        default:
            return state
    }
}

export default ts_data;
