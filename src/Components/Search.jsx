import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const [text, setText] = useState("");
  const handelChange = (e) => {
    setText(e.target.value);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    if(text){
      setSearchTerm(text);
    }
  }
    const handleRandomMeal = () => {
      setSearchTerm("");
      setText("");
      fetchRandomMeal();
    };
  return (
    <header className="search-container">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="type your favorite meal"
          className="form-input"
          onChange={handelChange}
          value={text}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandomMeal}
        >
          Suprise me !!
        </button>
      </form>
    </header>
  );
}

export default Search