import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navebar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">PLASHOE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Men">MEN</Nav.Link>
              <Nav.Link href="/Women">WOMEN</Nav.Link>
              <Nav.Link href="/Collection">COLLECTION</Nav.Link>
              <Nav.Link href="/Lookbook">LOOKBOOK</Nav.Link>
              <Nav.Link href="/Sale">SALE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navebar;
