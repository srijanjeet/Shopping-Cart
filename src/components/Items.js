import React, { useContext } from "react";
import { CartContext } from "./Cart";
import data from "../Utils/data.json"

const Items = ({ id, desc, name, imageUrl, price, quantity, tagline }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={imageUrl} alt="image" />
        </div>

        <div className="title">
          <h2 style={{backgroundColor: "blue", width: "fit-content", color:"white"}}>{tagline}</h2>
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
