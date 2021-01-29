import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { catFilter } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  catFilter: filter => {
    dispatch(catFilter(filter));
  },
});

const CategoryFilter = ({ catFilter }) => {
  const booksCategories = [
    'All',
    'Kids',
    'Action',
    'Horror',
    'Sci-Fi',
    'History',
    'Learning',
    'Biography',
  ];

  return (
    <div>
      <label htmlFor="book-category">
        Filter by Category
        <select
          id="book-category"
          onChange={e => catFilter(e.target.value)}
        >
          {booksCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  catFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CategoryFilter);
