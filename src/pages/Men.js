import React, { useContext } from "react";
import { myContext } from "./Context";
import { Card, Button, Navbar } from "react-bootstrap";
import { shoeProducts } from "./Products";
import Navebar from "./Navebar";

function Men() {
  console.log("product list", shoeProducts);
  const mensShoe = shoeProducts.filter((e) => e.type == "Men's Shoes");
  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container gap-5">
        <div className=" row " style={{ background: " rgb(230, 230, 217)" }}>
          <h1 style={{ fontSize: "50px", color:'black' }}>Men</h1>

          {mensShoe.map((e) => {
            return (
              <div
                onClick={() => `/details/${e.id}`}
                className="col-lg-4 col-6 mt-3"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>₹{e.price}</Card.Text>
                  </Card.Body>
                </Card>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Men;
