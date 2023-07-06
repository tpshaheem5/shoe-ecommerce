import React from 'react'
import { Card, Button, Navbar } from 'react-bootstrap';
import { shoeProducts } from './Products';
import Navebar from './Navebar';
import './Collection.css'

function Collection() {
  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container gap-5">
        <div className=" row " style={{ background: " rgb(230, 230, 217)" }}>
          <h1 style={{ fontSize: "50px", color:'black' }}>Collections</h1>

          {shoeProducts.map((e) => {
            return (
              <div
                onClick={() => `/details/${e.id}`}
                className="col-lg-4 col-6 mt-3"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Title>{e.type}</Card.Title>
                    <Card.Text>₹{e.price}</Card.Text>
                  </Card.Body>
                </Card>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection
