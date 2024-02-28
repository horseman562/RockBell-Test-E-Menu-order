import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import { v4 as uuidv4 } from 'uuid';

export const ShopContext = createContext(null);



const getDefaultCart = () => {
  let cart = [];
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [calculatedPriceTotal, setCalculatedPriceTotal] = useState(0);
  const [sumFromCart, setSumFromCart] = useState(0);

  useEffect(() => {
    calculatePriceTotal();
  }, [cartItems]);

  const getTotalCartAmount = (pricetotal) => {
    let totalAmount = 0;
    console.log(pricetotal)
    /* for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    } */
    return totalAmount;
  };
  
  const calculatePriceTotal = (trash = false) => {
    var defPrice = 0;
    let sum = 0;
    let myArray = []; // Empty array
    let modifierprice = 0;
    
    console.log('mono')
    cartItems.map((prod, index) => {
      modifierprice = 0;
      prod.modifierItem.map((item, index) => {
        var priceConverted = item.price;
         
        modifierprice = modifierprice + priceConverted;
      })

      const variantString = prod.variantItem;
      const priceString = variantString.split('/')[1].trim();
      const price = parseFloat(priceString) * prod.quantity;
      /* defPrice = defPrice * prod.quantity; */
      defPrice += price;
      defPrice += modifierprice;
      myArray.push(defPrice);

    })
    console.log(defPrice)
   
    /* if (myArray.length > 0 && trash) {
       myArray.shift();
    } */
    console.log(myArray)
    console.log('qweqwe')
    
    for (let i = 0; i < myArray.length; i++) {
      sum = myArray[i] + sum;
    }
 
    
    console.log(sum)
    setCalculatedPriceTotal(defPrice)
  };

  const sumTotalCartPrice = (itemAdded) => {

  }

  const addToCart = (itemAdded) => {
    setCartItems(prevState => [...prevState, itemAdded])
    
    console.log(cartItems);
    
  };

  const addQuantity = (itemId) => {

    /* setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); */
  };

  const minusQuantity = (itemId) => {

    /* setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); */
  };

  const setInputUpdateQuantity = (itemId, updatedQuantity) => {
    console.log('ran')
    console.log(updatedQuantity)
    setCartItems(prevCartItems => {
      // Map through the previous cart items and update the quantity of the item with the matching ID
      return prevCartItems.map(item => {
        if (item.id === itemId) {
          // Return a new object with the updated quantity
          return { ...item, quantity: updatedQuantity };
        }
        // For other items, return them as is
        return item;
      });
    });
  };
  
  const addUpdateToCart = (quantity, itemId) => {
    //

  };

  const removeUpdateFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  
  // Update the state with the new array
    setCartItems(updatedCartItems);
    calculatePriceTotal(true)
    console.log(cartItems)
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    quantity,
    addQuantity,
    minusQuantity,
    setInputUpdateQuantity,
    calculatePriceTotal,
    calculatedPriceTotal,
    addUpdateToCart,
    removeUpdateFromCart,
    sumTotalCartPrice
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
