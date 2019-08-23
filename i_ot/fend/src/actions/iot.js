import axios from 'axios';
import {
  GET_GRAPH_DATA_SUCCESS,
} from './types';


export const getGraphData = () => dispatch => {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common.token = token;
  return axios
    .get('ts-api/')
    .then((response) => {
      dispatch({ type: GET_GRAPH_DATA_SUCCESS, payload: response.data });
    });
};

export default getGraphData;
