/*eslint-disable */
import React, { useState, SetStateAction, Component  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

const BookForm = ({ createBook }) => {
  const [bookTitleInput, setBookTitleInput] = useState('');
  const [bookCategoryInput, setBookCategoryInput] = useState('');

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
    bookCategoryInput: options[1].value
  };

  const [state, setState] = React.useState(initState)

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
 }

  const handleSubmit = () => {
    createBook({
      ID: Math.ceil(Math.random() * 100),
      title: state.bookTitleInput,
      category: state.bookCategoryInput,
    });

    setState(initState);
  };

  return (
    <form>
      <label htmlFor="bookTitle">
        Title
        <input type="text" name="title" name="bookTitleInput"
          value={state.bookTitleInput}
          onChange={handleChange} />
      </label>

      <select name="bookCategoryInput"
          value={state.bookCategoryInput}
          onChange={handleChange}
      >
        {options.map(option => (
          <option key={`${option.value}`} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button type="button" onClick={handleSubmit}>
        Create Book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
