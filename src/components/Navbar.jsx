import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div class="nav-bar">
        <div class="logo">
          <a href="/">Fly Eagle</a>
        </div>
        <div class="search-box">
          <input
            type="text"
            name="search"
            placeholder="Your search ends here..."
            autocomplete="off"
          />
          <button>Search</button>
        </div>
        <div class="user-details">
          <div class="cart-details">
            <i id="cart" class="fa fa-shopping-cart fa"></i>
          </div>
          <div class="login">
            <a id="login-button" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
