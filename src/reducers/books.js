/* eslint-disable*/
import {REMOVE_BOOK, CREATE_BOOK, createBook, removeBook} from '../actions/index';

const books = [
  {
    ID: 1,
    title: 'Title 1',
    category: 'Cat-1',

  },
  {
    ID: 2,
    title: 'Title 1',
    category: 'Cat-1',

  },
  {
    ID: 3,
    title: 'Title 1',
    category: 'Cat-1',

  },
];

const bookReducer = (state= books, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, action.book
      ];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.ID), ...state.slice((action.ID + 1))
      ];
  
    default:
      return state;
  }
};

export default bookReducer;
