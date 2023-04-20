import React, { useState } from 'react'
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
        <input onChange={handleUserSearch} className='topicSearch' type="text" placeholder="Search..." />
        <i className='far fa-search'></i>
    </div>
  )
}

export default SearchBar