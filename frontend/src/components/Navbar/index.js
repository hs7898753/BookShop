import logo from "./bookShopLogo.png";
import "./index.css";
import React, { useState } from "react";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />{" "}
        </a>

        <div>
          <ul className={clicked ? "navbarlist active" : "navbarlist"}>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li className="hide">|</li>
            <li >
              <a href="/shop" className="active">Shop</a>
            </li>
            <li className="hide">|</li>
            <li>
              <a href="/about">About</a>
            </li>
            <div className="SignInUp">
              <button className="add-to-cart">
                <span className="text">Sign-in</span>
              </button>
              <button className="add-to-cart">
                <span className="text">Sign-up</span>
              </button>
            </div>
          </ul>
        </div>

        <div id="mobile">
          {clicked ? (
            <i
              id="bar"
              onClick={() => setClicked(!clicked)}
              className="fas fa-times"
            />
          ) : (
            <i
              id="bar"
              onClick={() => setClicked(!clicked)}
              className="fas fa-bars"
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;