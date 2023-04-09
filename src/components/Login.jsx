import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import ANavbar from "./ANavbar";
const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const getData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const Submit = () => {
    axios
      .post("http://localhost:3001/login", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ANavbar></ANavbar>
      <div className="Login-Container">
        <div className="Login-Box">
          <div className="Login-Title">
            <h1>LOGIN</h1>
          </div>
          <input
            type="text"
            name="userName"
            placeholder="Enter your Username"
            onChange={getData}
          ></input>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={getData}
          ></input>
          <br></br>
          <div className="Signup">
            <a href="/register">Sign up</a>
            <a href="/forget">Forgot password?</a>
          </div>

          <button onClick={Submit}>SUBMIT</button>
        </div>
      </div>
    </>
  );
};
export default Login;
