import { useState } from "react";
import axios from 'axios'
import Card from "./Card";
import React from "react";
import './Search.css'

const Search = () => {
  const [search, setSearch] = useState();
  //flipkart data
  const [flip_Title, setFlip_Title] = useState("");
  const [flip_Price, setFlip_Price] = useState("");
  //amazone data
  const [amaz_Title, setAmaz_Title] = useState("");
  const [amaz_Price, setAmaz_Price] = useState("");

  const handleSearch = (e) => {
    setSearch(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //getting data from flipkart
    try {
      const { data } = await axios.post(
        `http://localhost:8000/dataFromFlipkart?search=${search}`
      );
      // console.log("from flipkart ", data);
      setFlip_Title(data.title);
      setFlip_Price(data.price);
    } catch {
      console.log("error");
    }

    //getting data from amazon
    try {
      const { data } = await axios.post(
        `http://localhost:8000/dataFromAmazon?search=${search}`
      );
      console.log("from amazon ", data);
      setAmaz_Title(data.title);
      setAmaz_Price(data.price);
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
      <Card title={flip_Title} price={flip_Price} />
      <Card title={amaz_Title} price={amaz_Price} />
    </>
  );
};

export default Search;
