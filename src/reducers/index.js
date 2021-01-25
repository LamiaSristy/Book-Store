import { combineReducers } from 'redux';
import bookReducer from './books';

const reducer = combineReducers({ bookReducer });

export default reducer;
