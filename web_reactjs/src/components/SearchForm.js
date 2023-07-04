import React from "react";
import { images } from "../constants";

const SearchForm = ({ city, setCity, handleSearch }) => {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='enter city name'
        spellCheck='false'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src={images.search} alt='Search' />
      </button>
    </div>
  );
};

export default SearchForm;
