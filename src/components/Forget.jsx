import React from "react";
import "../App.css";
import ANavbar from "./ANavbar";
const Forget = () => {
  return (
    <>
      <ANavbar></ANavbar>
      <div className="Login-Container">
        <div className="Login-Box">
          <div className="Login-Title">
            <h1>FORGET</h1>
          </div>
          <input type="email" placeholder="Enter your Email"></input>
          <br></br>
          <input type="text" placeholder="Enter your OTP"></input>
          <br></br>
          <div className="Signup">
            <a href="/login">Login</a>
          </div>

          <button>SUBMIT</button>
        </div>
      </div>
    </>
  );
};
export default Forget;
