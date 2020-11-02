import axios from 'axios'
import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	REGISTER_FAIL,
	LOGIN_FAIL
} from './type.js';
import {returnErrors} from './errorAction.js';

export const getUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING })
  axios.get(`${process.env.REACT_APP_API}/getUser`, tokenConfig(getState))
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const signup = (user) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify(user)

  axios.post(`${process.env.REACT_APP_API}/user`, body, config)
    .then(res => dispatch({
      type: REGISTER_USER,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

export const signin = (user) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify(user)

  axios.post(`${process.env.REACT_APP_API}/login`, body, config)
    .then(res => dispatch({
      type: LOGIN_USER,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const logout = () => {
  return {
    type: LOGOUT_USER
  }
}

// export const forgot = (email) => dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }

//   const body = JSON.stringify(email)

//   axios.post(`${process.env.REACT_APP_API}/forgot`, body, config)
//     .then(res => dispatch({
//       type: FORGOT_PASS,
//       payload: res.data
//     }))
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status, 'FORGOT_FAIL'))
//       dispatch({
//         type: FORGOT_FAIL
//       })
//     })
// }

export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().authUser.token;

  // set Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  // if token, add to header
  if(token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}