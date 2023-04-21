import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

import "./SearchBar.scss";


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleUserSearch = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase)
    };

    console.log(searchInput);

  return (
    <div>
      <div className='form-field'>
        <FaSearch className="search-icon" />
        <input
          onChange={handleUserSearch}
          className='topicSearch'
          type="text"
          placeholder="Search..." />
          <i class="fa fa-search" aria-hidden="true"></i>
        {/* <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button> */}
      </div>
    </div>
  )
}

export default SearchBar