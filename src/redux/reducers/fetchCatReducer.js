
import { actionTypes } from './../actions/actionTypes';


const fetchCatReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.FETCH_CATS_SUCCESS:
            return {
                ...action.payload,
                ...state
            }
        case actionTypes.FETCH_CATS_START:
            return state
        case actionTypes.FETCH_CATS_ERROR:
            return state
        default:
        return state
    }
}

export default fetchCatReducer