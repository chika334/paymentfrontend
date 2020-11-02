import {combineReducers} from 'redux'
import authUser from './userReducer.js'
import error from './error.js'
import form from './form.js'

export default combineReducers({
    authUser,
    error,
    form
})																								
