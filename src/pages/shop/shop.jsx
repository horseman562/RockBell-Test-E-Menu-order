import React from "react";
import { PRODUCTS, FOOD_PRODUCT } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = ({quantity, setQuantity}) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Naqiuddin Food Shop</h1>
      </div>

      <div className="products">
        {FOOD_PRODUCT.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};
