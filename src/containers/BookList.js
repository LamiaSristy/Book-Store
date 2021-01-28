/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter  from '../components/CategoryFilter';

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch({
      ID: book.ID,
      type: 'REMOVE_BOOK',
    });
  },
});

const mapStateToProp = state => ({ 
  books: state.bookReducer,
  filter: state.filterReducer
});

const BookList = ({ books, removeBook, filter }) => {
  const handleRemoveBook = ID => {
    removeBook(ID);
  };

  const renderBook = book => <Book key={book.ID} book={book} removeBook={handleRemoveBook} />;

  const filteredBooks = filter === 'All' ? books : books.filter((book) => book.category === filter);

  return (
    <div>
      <CategoryFilter  />
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title </th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>{filteredBooks.map(renderBook)}</tbody>
    </table>  
    </div>
  ); 
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProps)(BookList);
