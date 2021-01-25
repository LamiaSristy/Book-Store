/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProp = (state) => ({books: state.books});

const BookList = ({ books }) => {
    const list = [];
    books.forEach(book => {
        list.push(
            <tr>
                <td>{book.ID}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
            </tr>
        );
    });
    return(
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
}

export default connect(mapStateToProp, null)(BookList);
