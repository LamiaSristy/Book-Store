/*eslint-disable*/
import { REMOVE_BOOK, CREATE_BOOK } from '../actions/index';

const books = [
  {
    ID: 1,
    title: 'Sapiens: A Brief History of Humankind',
    category: 'History',

  },
  {
    ID: 2,
    title: 'The Cat in the Hat',
    category: 'Kids',

  },
  {
    ID: 3,
    title: 'A Journey to the Center of the Earth',
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
