
import React, { useEffect, useRef, useState } from 'react';
import css from './SearchForm.module.css'

const SearchForm = ({ onSubmit }) => {

  const inputRef = useRef(null)

  const  handleClick = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    if (inputRef.current === null) return
    inputRef.current.focus()
  }, [])

  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const query = value.trim();
    if (!query.length) {
      return;
    }
    onSubmit(query);
  };


  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={handleChange}
          autoComplete="off"
          // autoFocus
          placeholder="Enter your movie title"
        />
        <button className={css.searchBtn} type="submit" onClick={handleClick}>Search</button>
      </form>
  )
}

export default SearchForm