import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.ID}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  ID: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
