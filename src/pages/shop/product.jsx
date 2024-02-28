import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardModal } from "../../components/CardModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const Product = (props) => {
  /* const { id, productName, price, productImage } = props.data; */
  const { id, group, groupName, variantItem, modifier, productImage } = props.data;
  const { addToCart, cartItems, quantity, minusQuantity, addQuantity, setInputUpdateQuantity } = useContext(ShopContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedModifiers, setSelectedModifiers] = useState([]);
  const [quantityItem, setQuantity] = useState(1);
  
  const handleQuantityChange = (value, itemId) => {
    if (value === 'increment') {
      setQuantity(quantityItem + 1);
      /* addQuantity(itemId) */
    } else if (value === 'decrement' && quantityItem > 1) {
      setQuantity(quantityItem - 1);
     /*  minusQuantity(itemId) */
    }
  };

  const handleVariantChange = (event) => {
      setSelectedVariant(event.target.value);
    };

    const handleModifierChange = (event) => {
      const label = event.target.nextSibling.textContent;
      const [modifier, priceText] = label.split(' / ');
      const price = parseFloat(priceText.split('RM ')[1]); // Extract the price and convert it to a number
      const isChecked = event.target.checked;
      
      if (isChecked) {
        setSelectedModifiers([...selectedModifiers, { name: modifier, price }]);
      } else {
        setSelectedModifiers(selectedModifiers.filter((item) => item.name !== modifier));
      }

       
    };
    
  
  const handleSubmit = (itemId) => {
     
      var itemToBeAdded = {
        id:itemId,
        variantItem: selectedVariant,
        variantItemPrice: selectedVariant,
        quantity: quantityItem,
        modifierItem: selectedModifiers,
      }
      addToCart(itemToBeAdded);
      /* addToCart(productId); */
      setShowModal(false);
    };

    const handleSubmitUpdate = (itemId, updatedQuantity) => {
     
      setInputUpdateQuantity(itemId, updatedQuantity)
    
      /* addToCart(productId); */
      setShowModal(false);
    };

  const handleCloseModal = () => {
      setShowModal(false);
  }


  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{groupName}</b>
        </p>
        {/* <p> ${price}</p> */}
      </div>
      <button className="addToCartBttn" onClick={() => setShowModal(true)}>
        Order Now
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{groupName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="variantSelect">
              <Form.Label>Variant:</Form.Label>
              <Form.Control as="select" onChange={handleVariantChange}>
                <option value="">Select a variant</option>
                {/* <option value="Nasi Lemak Telur">Nasi Lemak Telur / RM 4.00</option>
                <option value="Nasi Lemak Ayam Goreng">Nasi Lemak Ayam Goreng / RM 6.00</option>
                <option value="Nasi Lemak Ayam Rendang">Nasi Lemak Ayam Rendang / RM 7.00</option> */}
                {variantItem.map((variant, index) => (
                  <option key={index} value={`${variant.name} / ${variant.price.toFixed(2)}`}>
                    {variant.name} / RM {variant.price.toFixed(2)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="quantityInput">
          <Form.Label>Quantity:</Form.Label>
          <div className="input-group">
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => handleQuantityChange('decrement', id)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </span>
            <input
              type="number"
              className="form-control"
              value={quantityItem}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => handleQuantityChange('increment', id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </span>
          </div>
        </Form.Group>
            <Form.Group controlId="modifierCheckboxes">
              <Form.Label>Modifier:</Form.Label>
              <div>
              {modifier.map((item, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={`${item.name} / + RM ${item.price.toFixed(2)}`}
                  onChange={handleModifierChange}
                />
              ))}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
              variant="primary"
              onClick={() => handleSubmit(id)}
            >
              Add To Cart
            </Button>
          {/* {cartItems.filter((item) => item.id === id).length === 0 && (
            <Button
              variant="primary"
              onClick={() => handleSubmit(id)}
            >
              Add To Cart
            </Button>
          )}
          {cartItems.map((item, index) => (
            <div key={index}>
              {item.id === id && (
                <Button variant="primary" onClick={() => handleSubmitUpdate(item.id, quantityItem)}>
                  Update Cart
                </Button>
              )}
            </div>
          ))} */}

        </Modal.Footer>
      </Modal>
      
    </div>
  );
};
