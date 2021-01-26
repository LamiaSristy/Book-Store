import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.ID}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => removeBook(book.ID)}>
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: {
    ID: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(null, null)(Book);
