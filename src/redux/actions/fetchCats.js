import { actionTypes } from './actionTypes';


const fetchCatsError = () =>{
    return {type: "FETCH_CATS_ERROR"}
}

const fetchCatsStarted = () =>{
    return {type: actionTypes.FETCH_CATS_START}
}

const fetchCatsSuccess = (cat) => {
    return {type: actionTypes.FETCH_CATS_SUCCESS, payload: cat}
}

// fetching a random cat starts now
// const fetchCats = () => dispatch => {
//     dispatch(fetchCatsStarted())

//     fetch("https://api.thecatapi.com/v1/images/search",{
//         headers: {
//             "Content-Type": "application/json",
//             "x-api-key": "YOUR_API_KEY"
//         }
//     })
//     .then( catResponse => catResponse.json()) 
//     .then( cat => dispatch(fetchCatsSuccess(cat)) )
//     .catch( err => dispatch(fetchCatsError()))
// }

// async-await keyword
export const fetchCats =  () => async dispatch => {
    dispatch(fetchCatsStarted())
    try{
        const catResponse = await fetch("https://api.thecatapi.com/v1/images/search",{
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "08299ab8-dfc8-48c4-86d7-3f5726a99af8"
            }
        })

        const cat = await catResponse.json()
        dispatch(fetchCatsSuccess(cat))
    }catch(exc){
        dispatch(fetchCatsError())
    }
}