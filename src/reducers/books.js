import { REMOVE_BOOK, CREATE_BOOK } from '../actions/index';

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

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.ID !== action.ID);
    default:
      return state;
  }
};

export default bookReducer;
