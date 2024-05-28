import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
// import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const query = value.trim();
    if (!query.length) {
      toast.error('Please, enter your query', {
        style: {
          borderRadius: '8px',
          background: 'linear-gradient(90deg, rgba(205,64,103,0.7826568859965861) 21%, rgba(41,0,255,1) 80%)',
          color: '#fff',
        },
      });
      return;
    }
    onSubmit(query);
  };


  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <header id="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit" >
          <FiSearch size="16px" />
        </button>
      </form>
      <Toaster position="top-left" aria-label="Search"/>
    </header>
  );
};

export default SearchBar;