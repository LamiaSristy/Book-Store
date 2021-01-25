import React from 'react';

const BookForm = () => {
  const options = [
    {
      label: 'Action',
      value: 'action',
    },
    {
      label: 'Biography',
      value: 'biography',
    },
    {
      label: 'History',
      value: 'history',
    },
    {
      label: 'Horror',
      value: 'horror',
    },
    {
      label: 'Kids',
      value: 'kids',
    },
    {
      label: 'Learning',
      value: 'learning',
    },
    {
      label: 'Sci-Fi',
      value: 'sci-fi',
    },
  ];

  return (
    <form>
      <label htmlFor="bookTitle">
        title
        <input type="text" name="title" value="" />
      </label>

      <select>
        {options.map(option => (
          <option key={`${option.value}`} value={option.value}>{option.label}</option>
        ))}
      </select>
      <input type="submit" name="submit" value="Submit" />
    </form>
  );
};

export default BookForm;
