
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUserPin, BiLogOutCircle } from "react-icons/bi";
import {AiOutlineMessage} from "react-icons/ai"
import {RiAdminFill} from 'react-icons/ri'
import { useContext } from "react";
import "./Navebar.css";
import { myContext } from "./Context";


function Navebar() {
  const { setLogin,login,setCart } = useContext(myContext);
  const navigate = useNavigate()

  // const aa=()=>{
  //   if(login){
     
  //   }else{
  //     alert("please login ")
  //   }
  // }

  const handleLogout = () => {
    if(login){
    setLogin(false);
    setCart([])
    alert('logged out successfully')
    }else{
      alert("please log in")
      navigate('/Login')
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">PLASHOE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" w-100">
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
              <Link to='/Cart' className="nav-link">
                CART
              </Link>
              <div className="ms-auto heyy ">
                <Link to="#" className="login" onClick={handleLogout}>
            {login ?<BiLogOutCircle/>:null}
                </Link>
                <Link to="/Contact" className="login">
                <AiOutlineMessage/>
                </Link>
                <Link to="/login" className="login">
                  <BiSolidUserPin />  
                </Link>
                <Link to="/Adminlogin" className="login">
                  <RiAdminFill />
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
