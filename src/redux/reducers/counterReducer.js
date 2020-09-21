
import { actionTypes } from './../actions/actionTypes';


const initialState = { x: 1 }
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                x: state.x + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                x: state.x - 1
            }
        case actionTypes.RESET:
            return {
                ...state,
                x: 1
            }
        default:
            return state;
    }
}

export default counterReducer;