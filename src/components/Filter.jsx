import React from 'react'

const Filter = ({ searchQuery, onSearchInputChange, onSearchSubmit }) => {
  return (
      <input
        className='form-control'
        type="text"
        name='search'
        value={searchQuery}
        onChange={onSearchInputChange}
        placeholder="Search for a country..."
      />
  );
}

export default Filter