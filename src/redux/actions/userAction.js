// import axios from "axios";
import { actionTypes } from './actionTypes';
import { Client } from './../../Client';

// export const fetchUsers = () => {
//     return (dispatch) => {
//       dispatch(fetchUsersRequest())
//       axios
//       Client.getEntries({
//                     'content_type': 'offertshirt',
//                     'limit': 3,
//                   })
//         .then(response => {
//           // response.data is the users
//           const users = response.items
//           dispatch(fetchUsersSuccess(users))
//         })
//         .catch(error => {
//           // error.message is the error message
//           dispatch(fetchUsersFailure(error.message))
//         })
//     }
//   }

// regular fetch
//   export const fetchUsers = () => {
//       return (dispatch) => {
//           dispatch(fetchUsersRequest())
//           Client.getEntries({
//             'content_type': 'offertshirt',
//             'limit': 3,
//           })
//         //   .then(res => res.json())
//           .then(res2 => {
//               const users = res2.items
//               dispatch(fetchUsersSuccess(users))
//           })
//           .catch(error => {
//             dispatch(fetchUsersFailure(error.message))
//           })
//       }
//   }

// regular async await

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest())
       const data = await  Client.getEntries({
                    'content_type': 'offertshirt',
                    'limit': 3,
                  })
        const res2 = await data.items
            const result = res2
            dispatch(fetchUsersSuccess(result))
        .catch(error => {
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