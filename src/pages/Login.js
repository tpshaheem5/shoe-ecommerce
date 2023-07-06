import React, { useContext, useRef } from "react";
import {myContext} from '../App'
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login() {
  const { user } = useContext(myContext);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;

    const foundUser = user.find((user) => user.name === nameValue);

    if (foundUser && foundUser.password === passwordValue) {
      navigate("/Home"); 
      console.log("Login successful");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" ref={nameRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login