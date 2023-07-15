import { useState } from "react";
import React from "react";
import './Search.css'
import axios from "axios";
import Card from "./Card";

const Search = () => {
    const [search , setSearch] = useState('');
    const [ title, setTitle] = useState('')
    const [ price, setPrice] = useState('')

  const handleSearch = (e) => {
     setSearch(e)
  }
  
  const handleSubmit = async(e) => {
      e.preventDefault(); // this is no disable the refresh when the button is clicked

      try {
        const  response  = await axios.post(
          `http://localhost:3000/dataFromFlipkart?search=${search}`
        );
        // const data = response.json();
        console.log(response)
        setTitle(response.title)
        setPrice(response.price)

        //now we have title and price, but our product component is in app.jsx, to pass the data there we have to use context api. but we don't need it
        //we can just render the product page from here
     }
     catch{
       console.log("error")
     }
  }
    
    return(
        <>
          <div className="search-bar">
           <form  className="form">
            <input name="search" placeholder='Enter the product name' onChange={(e) => handleSearch(e.target.value)} ></input>
            <button type="submit" onClick={handleSubmit}>Search</button>
           </form>
          </div>
          <Card price={price} title={title}/>
        </>
    )
}

export default Search;