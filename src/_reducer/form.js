import { CONTACT_US } from '../_action/type.js'

const initialState = {
    sent: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CONTACT_US:
            return {
                ...state,
                ...action.payload,
                state: true
            }
        default:
			return state;
    }
}
