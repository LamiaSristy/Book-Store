/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';


const mapDispatchToProps = (dispatch) => ({
  removeBook: (ID) => {
    dispatch({
      ID,
      type: 'REMOVE_BOOK'
    });
  }
});

const mapStateToProp = (state) => ({books: state.bookReducer});

const BookList = ({ books, removeBook }) => {

  const renderBook = (book) => <Book key={book.ID} book={book} removeBook={removeBook} />;

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
};

export default connect(mapStateToProp, mapDispatchToProps)(BookList);
