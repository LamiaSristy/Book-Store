import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProp = state => ({ books: state.bookReducer });

const BookList = ({ books }) => {
  const list = [];
  books.forEach(book => {
    list.push(
      <Book key={book.ID} book={book} />,
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title </th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProp, null)(BookList);
