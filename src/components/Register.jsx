import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import ANavbar from "./ANavbar";
const Register = () => {
  // variable  , function that sets new value
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const getData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submit = () => {
    axios
      .post("http://54.152.91.203:3001/newUser", userData)
      .then((response) => {
        alert(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <ANavbar></ANavbar>
      <div className="Login-Container">
        <div className="Signup-Box">
          <div className="Login-Title">
            <h1>SIGN UP</h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={getData}
          ></input>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={getData}
          ></input>
          <br></br>
          <input
            type="text"
            name="username"
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
            <a href="/login">Login</a>
          </div>

          <button onClick={submit}>SUBMIT</button>
        </div>
      </div>
    </>
  );
};
export default Register;
