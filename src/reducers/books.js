import { REMOVE_BOOK, CREATE_BOOK } from '../actions/index';

const books = [
  {
    ID: 1,
    title: 'Book1',
    category: 'Action',

  },
  {
    ID: 2,
    title: 'Book2',
    category: 'Kids',

  },
  {
    ID: 3,
    title: 'Book3',
    category: 'Sci-Fi',

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
