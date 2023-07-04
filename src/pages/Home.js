import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Home() {
  return (
    <div className='BACKGROUND_IMG'>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#Home">PLASHOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  to="/Men">MEN</Nav.Link>
            <Nav.Link href="#link">WOMEN</Nav.Link>
            <Nav.Link href="#link">COLLECTION</Nav.Link>
            <Nav.Link href="#link">LOOKBOOK</Nav.Link>
            <Nav.Link href="#link">SALE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div >
      <h1 style={{color:'white',marginTop:'27%',marginLeft:'10px'}}>NEVER BEFORE.</h1>
      <h1 style={{color:'white',marginLeft:'10px'}}>FOREEVER AFTER.</h1>
      <h6 style={{color:'white',marginLeft:'10px'}}>Blending court-side attitude with a modern<br/>touch for your everyday style</h6>
      <button style={{marginLeft:'10px'}}>SHOP MEN</button>
      <button style={{marginLeft:'10px'}}>SHOP WOMEN</button>
    </div>
  </div>
  );
}

export default Home;