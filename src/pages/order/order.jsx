import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const OrderSummaryPage = ({ orderDetails }) => {
    const [loading, setLoading] = useState(true);
    const { addToCart, cartItems, quantity, minusQuantity, addQuantity, setInputUpdateQuantity, calculatedPriceTotal } = useContext(ShopContext);
    const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, /* 3000 */500); // 3 seconds delay
  }, []);


  return (
    <>
    {loading ? (
        <Container className="text-center mt-4">
          <Spinner animation="border" role="status">
          
          </Spinner>
          <p>Sending your order to the kitchen...</p>
        </Container>
    ) : (
    <Container>
      <Row>
        <Col>
          <h1>Order Confirmation</h1>
          <p>Thank you for your order! Here is a summary of your order:</p>
          <p>You can order again by clicking <a style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer'  }} onClick={() => navigate("/")}>here</a></p>
        </Col>
      </Row>
      <Row>
        <Col>
          {cartItems.map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{item.variantItem}</Card.Title>
                {console.log(item.modifierItem)}
                {item.modifierItem.map((moditem, index) => (
                    <Card.Subtitle className="mb-2 text-muted">{moditem.name}: {moditem.price.toFixed(2)}</Card.Subtitle>
                ))}
                <Card.Subtitle className="mb-2 text-muted">Quantity: {item.quantity}</Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
          <Card.Text>
                  Total Price Paid: ${calculatedPriceTotal.toFixed(2)}
                </Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <p><strong>Total:</strong> ${orderDetails.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</p> */}
        </Col>
      </Row>
    </Container>
    )}
     </>
  );
};

 
