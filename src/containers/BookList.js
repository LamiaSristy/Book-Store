import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch({
      ID: book.ID,
      type: 'REMOVE_BOOK',
    });
  },
});

const mapStateToProp = state => ({ books: state.bookReducer });

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = ID => {
    removeBook(ID);
  };

  const renderBook = book => <Book key={book.ID} book={book} removeBook={handleRemoveBook} />;
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title </th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>{books.map(renderBook)}</tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProps)(BookList);
