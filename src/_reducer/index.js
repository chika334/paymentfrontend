import {combineReducers} from 'redux'
import authUser from './userReducer.js'
import error from './error.js'
import kyc from './kycandbvn'
import wallet from './walletReducer'

export default combineReducers({
    authUser,
    error,
    kyc,
    wallet
})																								
