import * as types from "./actionTypes";
import axios from "axios";
export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};
export const signupRequest = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};
export const signupSuccess = (payload) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload,
  };
};

export const signupFailure = () => {
  return {
    type: types.SIGNUP_FAILURE,
  };
};

export const loginData = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post("https://odd-rose-leopard-suit.cyclic.app/user/login", payload)
    .then((res) => {
      return dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFailure());
    });
};
export const signupData = (payload) => (dispatch) => {
  dispatch(signupRequest());
  return axios
    .post("https://odd-rose-leopard-suit.cyclic.app/user/signup", payload)
    .then((res) => {
      return dispatch(signupSuccess());
    })
    .catch((err) => {
      dispatch(signupFailure());
    });
};
