/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, catFilter } from '../actions/index';
// import CategoryFilter  from '../components/CategoryFilter';

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book.ID));
  },
  catFilter: filter => {
    dispatch(catFilter(filter));
  },
});

const mapStateToProp = state => ({
  books: state.bookReducer,
  filter: state.filterReducer,
});

const BookList = ({
  books, removeBook, catFilter, filter,
}) => {
  const handleRemoveBook = ID => {
    removeBook(ID);
  };

  const handleCategoryChange = filter => {
    catFilter(filter);
  };

  const renderBook = book => <Book key={book.ID} book={book} removeBook={handleRemoveBook} />;

  const filteredBooks = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <CategoryFilter catFilter={handleCategoryChange} />
      <div className="books-container">
        {filteredBooks.map(renderBook)}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  catFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProps)(BookList);
