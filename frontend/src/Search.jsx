import { useState } from "react";
import React from "react";
import './Search.css'

const Search = () => {
    const [search , setSearch] = useState();

  const handleSearch = (e) => {
     setSearch(e)
  }
  
    
    return(
        <>
          <div className="search-bar">
           <form className="form">
            <input placeholder='Enter the product name' onChange={(e) => handleSearch(e.target.value)} ></input>
            <button type="submit">Search</button>
           </form>
          </div>
        </>
    )
}

export default Search;