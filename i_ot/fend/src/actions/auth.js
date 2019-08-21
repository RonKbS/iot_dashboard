import axios from "axios";
import { toast } from 'react-toastify';

import { 
  SIGNIN
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
