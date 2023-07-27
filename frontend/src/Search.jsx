import { useState } from "react";
import axios from 'axios'
import Card from "./Card";
import React from "react";
import './Search.css'

const Search = () => {
    const [search , setSearch] = useState();

  const handleSearch = (e) => {
     setSearch(e);
  }
  
  const handleSubmit = async(e) => {
      e.preventDefault(); // this is no disable the refresh when the button is clicked

      try {
        const  response  = await axios.post(
          `http://localhost:8000/dataFromFlipkart?search=${search}`
        );
        // const data = response.json();
        console.log(response)
        // setTitle(response.title)
        // setPrice(response.price)

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
          <Card/>
        </>
    );
}

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `http://localhost:8000/dataFromFlipkart?search=${search}`
  //     );
  //     // const data = response.json();
  //     console.log(data);
  //   } catch {
  //     console.log("error");
  //   }
  // };

  // return (
  //   <>
  //     <div className="search-bar">
  //       <form className="form">
  //         <input
  //           name="search"
  //           placeholder="Enter the product name"
  //           onChange={(e) => handleSearch(e.target.value)}
  //         ></input>
  //         <button type="submit" onClick={handleSubmit}>
  //           Search
  //         </button>
  //       </form>
  //     </div>
  //     <Card />
  //     <Card />
  //   </>
  // );


export default Search;
