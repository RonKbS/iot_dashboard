import axios from "axios";
import { toast } from 'react-toastify';

import { 
  SIGNIN,
  REGISTERED
 } from "./types";





 // SIGNING
export const signIn = payload => dispatch => {
  axios.post("/rest-api/token/", payload)
    .then(response => {
        localStorage.setItem('token', response.data.access);
        dispatch({ type: SIGNIN, payload: true });
    })
    .catch((error) => {
        let errortype = Object.keys(error.response.data)[0]
        if (errortype === "detail") {
          toast.error(
            error.response.data.detail,
            { autoClose: false, hideProgressBar: true }
          );
        }
        else if (errortype !== "detail") {
          toast.error(
            error.response.data[errortype][0],
            { autoClose: false, hideProgressBar: true }
          );
        }
      }
    )
};

// REGISTER
export const register = (payload) => dispatch => {
  console.log(payload)
  axios
    .post('/rest-api/register/', payload)
    .then(() => {
      dispatch({ type: REGISTERED, payload: true });
    })
    .catch((error) => {
        let errortype = Object.keys(error.response.data)[0]
        if (errortype === "detail") {
          toast.error(
            error.response.data.detail,
            { autoClose: false, hideProgressBar: true }
          );
        }
        else if (errortype !== "detail") {
          toast.error(
            error.response.data[errortype][0],
            { autoClose: false, hideProgressBar: true }
          );
        }
      }
    )
};
