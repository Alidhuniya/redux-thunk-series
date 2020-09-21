import axios from "axios";
import { actionTypes } from './actionTypes';

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
  
  export const fetchUsersRequest = () => {
    return {
      type: actionTypes.FETCH_USERS_REQUEST
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
      type: actionTypes.FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: actionTypes.FETCH_USERS_FAILURE,
      payload: error
    }
  }