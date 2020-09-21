  
import { combineReducers } from 'redux';
import fetchCatReducer from './fetchCatReducer';

const allReducers =  combineReducers(
    {
    catsfav: fetchCatReducer
    }
);

export default allReducers;