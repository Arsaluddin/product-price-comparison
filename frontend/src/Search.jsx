import { useState } from "react";
import React from "react";
import "./Search.css";
import axios from "axios";
import Card from "./Card";

const Search = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:8000/dataFromFlipkart?search=${search}`
      );
      // const data = response.json();
      console.log(data);
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <div className="search-bar">
        <form className="form">
          <input
            name="search"
            placeholder="Enter the product name"
            onChange={(e) => handleSearch(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
      <Card />
      <Card />
    </>
  );
};

export default Search;
