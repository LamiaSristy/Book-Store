/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import '../stylesheets/bookForm.css';

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

const BookForm = ({ createBook }) => {
  const options = [
    {
      label: 'Action',
      value: 'Action',
    },
    {
      label: 'Biography',
      value: 'Biography',
    },
    {
      label: 'History',
      value: 'History',
    },
    {
      label: 'Horror',
      value: 'Horror',
    },
    {
      label: 'Kids',
      value: 'Kids',
    },
    {
      label: 'Learning',
      value: 'Learning',
    },
    {
      label: 'Sci-Fi',
      value: 'Sci-Fi',
    },
  ];

  const initState = {
    bookTitleInput: '',
    bookCategoryInput: '',
  };

  const [state, setState] = React.useState(initState);

  const handleChange = e => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    createBook({
      ID: Math.ceil(Math.random() * 100),
      title: state.bookTitleInput,
      category: state.bookCategoryInput,
    });

    setState(initState);
  };

  return (
    <div className="book-form-container">
      <div className="wrapper inner-wrapper">
        <h2 className="book-form-heading">Add New Book</h2>
        <form>
        <input
          className="form-control book-title"
          type="text"
          name="bookTitleInput"
          value={state.bookTitleInput}
          onChange={handleChange}
          placeholder="Book title"
          required
        />

      <select
        className="form-control book-category"
        name="bookCategoryInput"
        value={state.bookCategoryInput}
        onChange={handleChange}
        required
      >
        <option value="">None</option>
        {options.map(option => (
          <option key={`${option.value}`} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button className="btn-create" type="button" onClick={handleSubmit}>
        Create Book
      </button>
    </form>
      </div>
    </div>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
