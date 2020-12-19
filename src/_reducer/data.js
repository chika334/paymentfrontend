import { 
    DATA_PAY,
    DATA_LOADED,
    DATA_LOADING,
    DATA_ERROR } from '../_action/type'

const initialState = {
    fetched: false,
    data: [],
    msg: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DATA_PAY:
            return {
                ...state,    
            }
        case DATA_LOADING:
            return {
                ...state,
            }
        case DATA_LOADED:
            return {
                ...state,
                fetched: true,
                data: action.payload
            }
        default:
            return state
    }
}
