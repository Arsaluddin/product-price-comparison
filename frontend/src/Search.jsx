import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [flipProducts, setFlipProducts] = useState([]);
  const [amazProducts, setAmazProducts] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const flipResponse = await axios.post(
        `http://localhost:8000/dataFromFlipkart?search=${search}`
      );
      setFlipProducts(flipResponse.data);

      const amazResponse = await axios.post(
        `http://localhost:8000/dataFromAmazon?search=${search}`
      );
      setAmazProducts(amazResponse.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      setFlipProducts([]);
      setAmazProducts([]);
    }
  };

  return (
    <>
      <div className="search-bar">
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Enter the product name"
            onChange={(e) => handleSearch(e)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="comparison-container">
        <div className="flipkart-products">
          <h2>Products from Flipkart</h2>
          {flipProducts.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              description={product.description}
            />
          ))}
        </div>
        <div className="amazon-products">
          <h2>Products from Amazon</h2>
          {amazProducts.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
