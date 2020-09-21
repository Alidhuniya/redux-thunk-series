  
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const allReducers =  combineReducers(
    {
    userList: userReducer
    }
);

export default allReducers;