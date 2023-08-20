




import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Product" />
      <div className="card-desc">
        <h3>{props.title}</h3>
        <p>Price: {props.price}</p>
        <p>Rating: {props.rating}</p>
        <p>
          <strong>Description:</strong> {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
