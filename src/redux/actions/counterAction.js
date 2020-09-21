import { actionTypes } from './actionTypes';


export const increment = () => {
    return {
    type: actionTypes.INCREMENT
}
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}


export const reset = () => {
    return {
        type: actionTypes.RESET
    }
}
