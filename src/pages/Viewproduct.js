import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { myContext } from './Context';
import './Viewproduct.css';
import Navebar from './Navebar';
import Login from './Login';

const Viewproduct = () => {
  const { products, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const det = products.filter((e) => e.id == id);
  console.log(det);

  const addTocart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      alert('Product is already in the cart');
    } else {
      if (Login) {
        const updatedCart = [...cart, { ...item, quantity: 1 }];
        setCart(updatedCart);
        alert(`${item.title} successfully added to the cart!`);
      } else {
        navigate('/Login');
      }
    }
  };

  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container">
        {det.map((e) => {
          return (
            <Card key={e.id}>
              <div className="d-flex flex-column flex-lg-row w-100 align-items-center">
                <Card.Img className="w-50" variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>
                    <h2>{e.title}</h2>
                    <h5>{e.type}</h5>
                  </Card.Title>
                  <Card.Text>
                    <h3>₹{e.price}</h3>
                    <br />
                    <br />
                    <p className="w-75">
                      Auctor eros suspendisse tellus venenatis sodales purus non pellentesque,
                      nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur
                      egestas magna pharetra cursus risus, lectus enim eget eu et lobortis
                      faucibus. Auctor eros suspendisse tellus venenatis sodales purus non
                      pellentesque, nunc sit eu, enim
                    </p>
                  </Card.Text>
                  <Button
                    onClick={() => {
                      addTocart(e);
                    }}
                    variant="primary"
                  >
                    ADD TO CART
                  </Button>
                </Card.Body>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Viewproduct;
