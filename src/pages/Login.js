import React, {useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { myContext } from "./Context";
import { Link } from "react-router-dom";

function Login() {
  const { user,setLogin,login } = useContext(myContext);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;

    const foundUser = user.find((user) => user.name === nameValue);
    console.log(login);

    if (foundUser && foundUser.password === passwordValue) {
      setLogin(true)
      console.log(login);
      navigate("/");
      alert("Login successful");
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
      <div>
  <h6 style={{ color: "black" }}>
    Don't have an account? <Link to="/Registration">Create</Link>
  </h6>
</div>
    </div>
  );
}

export default Login;
