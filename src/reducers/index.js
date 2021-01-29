import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const reducer = combineReducers({ bookReducer, filterReducer });

export default reducer;
