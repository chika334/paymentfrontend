import {combineReducers} from 'redux'
import authUser from './userReducer.js'
import error from './error.js'
import kyc from './kycandbvn'
import wallet from './walletReducer'
import airtime from './airtime'
import transaction from './transaction'

export default combineReducers({
    authUser,
    error,
    kyc,
    wallet,
    airtime,
    transaction
})																								
