import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BiSolidUserPin } from "react-icons/bi"
import "./Navebar.css"

function Navebar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">PLASHOE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/Men" className="nav-link">
                MEN
              </Link>
              <Link to="/Women" className="nav-link">
                WOMEN
              </Link>
              <Link to="/Collection" className="nav-link">
                COLLECTION
              </Link>
              <Link to="/Lookbook" className="nav-link">
                LOOKBOOK
              </Link>
              <Link to="/Cart" className="nav-link">
                CART
              </Link>
              <div className="login-session">
              <Link to="/login" className="login">
              <BiSolidUserPin />
              </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navebar;
