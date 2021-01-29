import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

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
    <form>
      <label htmlFor="bookTitle">
        Title
        <input
          type="text"
          name="bookTitleInput"
          value={state.bookTitleInput}
          onChange={handleChange}
          required
        />
      </label>

      <select
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
