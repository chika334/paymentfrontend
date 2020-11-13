import { WALLET_LOADING, INITIAL_WALLET, ADDED_BALANCE_WALLET, DEDUCT_FROM_WALLET } from './type';
import { tokenConfig } from './userAction'
import axios from 'axios'

export const initialWallet = () => (dispatch, getState) => {
    dispatch({ type: WALLET_LOADING })
    axios.get(`${process.env.REACT_APP_API}/getWallet`, tokenConfig(getState))
    .then(res => dispatch({
      type: INITIAL_WALLET,
      payload: res.data
    }))
    .catch(err => console.log(err))
}

export const AddedBalance = (user) => dispatch => {
   return dispatch({
      type: ADDED_BALANCE_WALLET,
      // payload: res.data
    })
    .catch(err => console.log(err))
}

export const DeductWallet = (user) => dispatch => {
   return dispatch({
      type: DEDUCT_FROM_WALLET,
      //payload: res.data
    })
    .catch(err => console.log(err))
}
