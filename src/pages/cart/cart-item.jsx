import React, { useContext,useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const CartItem = (props) => {
  const { id, productName, price, productImage, variantItem, modifierItem, quantity} = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, removeUpdateFromCart, addUpdateToCart, setInputUpdateQuantity, sumTotalCartPrice } =
    useContext(ShopContext);
    const [amountTotcalCalculated, setAmountTotcalCalculated] = useState([]);
    const [quantityUpdate, setQuantityUpdate] = useState(quantity);
    const [priceperorder, setpriceperorder] = useState(0);

    const handleQuantityChange = (value, itemId) => {
      if (value === 'increment') {
        setQuantityUpdate(quantityUpdate + 1);
        setInputUpdateQuantity(itemId,quantityUpdate + 1);
        calculatePrice();
        /* addQuantity(itemId) */
      } else if (value === 'decrement' && quantityUpdate > 1) {
        setQuantityUpdate(quantityUpdate - 1);
        setInputUpdateQuantity(itemId, quantityUpdate - 1);
        calculatePrice();
       /*  minusQuantity(itemId) */
      }
    };
    
      
    const calculatePrice = () => {
      var defPrice = 0;
      modifierItem.map((item, index) => {
        var priceConverted = item.price * quantity;
        defPrice += priceConverted;
    })

    const variantString = variantItem;
    const priceString = variantString.split('/')[1].trim();
    const price = parseFloat(priceString) * quantity;
    defPrice += price;
    setpriceperorder(defPrice);
   /*  return defPrice; */
    };

    useEffect(() => {
      calculatePrice();
      sumTotalCartPrice();
    }, [quantityUpdate]);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{variantItem}</b>
        </p>
        <p>
        {modifierItem.map((item, index) => {
            return <h5>{item.name} / {item.price.toFixed(2)}</h5>;
        })}
          {console.log(modifierItem)}
        </p>
        <h4>Quantity: {quantityUpdate}x</h4>
        <p>Price: RM{priceperorder}</p>
        
        <div className="d-flex align-items-center">
          <div className="countHandler">
            <button onClick={() => handleQuantityChange('decrement', id)}> - </button>
            <input
              value={quantityUpdate}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => handleQuantityChange('increment', id)}> + </button>
          </div>
          <Button className="ml-2" variant="danger" onClick={() => removeUpdateFromCart(id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
