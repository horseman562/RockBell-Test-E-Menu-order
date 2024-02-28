import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { Modal, Button, Form } from 'react-bootstrap';
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, calculatedPriceTotal } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartItems.map((product, index) => {
            return <CartItem key={index} data={product}/>;
        })}
      </div>
      <div className="table-number">
      <Form.Group controlId="tableNumberInput">
     {/*  <Form.Label>Table Number</Form.Label> */}
      {/* <Form.Control
        type="text"
        placeholder="Enter table number"
        value="0"
        
      /> */}
    </Form.Group>
      </div>
      
      {cartItems.length > 0 ? (
        <div className="checkout">
          <h3> Total Price: ${calculatedPriceTotal} </h3>
          <button onClick={() => navigate("/")}>Back To Menu </button>
          <button onClick={() => {navigate("/checkout");}}> Order Now</button>
         
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
