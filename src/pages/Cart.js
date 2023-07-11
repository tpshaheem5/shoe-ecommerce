import React, { useContext } from 'react';
import { myContext } from './Context';
import { Card, Button } from 'react-bootstrap';
import './Cart.css';
import Navebar from './Navebar';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, setCart } = useContext(myContext);
  const navigate = useNavigate()
  

  const removeItem = (e) => {
    const removeItemId = parseInt(e.target.id);
    const newItems = cart.filter((item) => item.id !== removeItemId);
    setCart(newItems);
  };

  const addQty = (id) => {
    const newQty = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(newQty);
  };

  const removeQty = (id) => {
    const newQty = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCart(newQty);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };
   
  const amount = calculateTotal()

  // const handlePayment = () => {
  //   // Perform payment processing here
  //   // Assuming the payment is successful for demonstration purposes
  //   setCart([]); // Empty the cart after successful payment
  //   // Add your payment processing logic here
  // };

  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container">
        <div className="row">
          {cart.map((item) => (
            <Card key={item.id} className="w-25 col-4">
              <Card.Img variant="top" src={item.image} className="w-100" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Price: ₹{item.price * item.qty} {/* Multiply price by quantity */}
                </Card.Text>
                <Card.Text>Quantity: {item.qty}</Card.Text>
                <p onClick={() => removeQty(item.id)}>Remove Qty</p>
                <p onClick={() => addQty(item.id)}>Add Qty</p>
                <p id={item.id} onClick={removeItem}>
                  Remove Item
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="payment-section">
          {cart.length > 0 && (
            <>
              <h3>Total Amount: ₹{calculateTotal()}</h3>
              <Button variant="primary" onClick={()=>navigate(`/Payment/${amount}`)}  >
                Proceed to Payment
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
