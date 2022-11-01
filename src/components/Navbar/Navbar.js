import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  // const navbarLinks = ["Home", "About", "Portfolio"];
  return (
    <nav className="nav">
      {/* <div className="nav-container">
        <div className="nav-menu">
          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/home">
                {navbarLinks[0]}
              </a>
            </li>
          </ul>

          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/about">
                {navbarLinks[1]}
              </a>
            </li>
          </ul>

          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/portfolio">
                {navbarLinks[2]}
              </a>
            </li>
          </ul>
        </div> */}
      <div className="nav-logo">~Britny Lain~</div>
      {/* <button className="sign-in-button">
          <a className="nav-button-link" href="/signin">
            Contact
          </a>
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
