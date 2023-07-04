import React, { useContext, useRef } from "react";
import { myContext } from "../App.js";
import { useNavigate } from "react-router-dom";
import "./Registeration.css"

function Ragisration() {
  const { user,setUser } = useContext(myContext);
  const nameRef = useRef({});
  const passwordRef = useRef({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;
    setUser([...user,{name:nameValue,password:passwordValue,id:Date.now()}])
    navigate("/Login");
    console.log(user);

  };
  return (
    <div  className="registration-container">
      <h2>Registration</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Ragisration;

