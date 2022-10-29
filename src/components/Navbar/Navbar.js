import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const navbarLinks = ["Tech", "Parenthood", "Recipes", "About"];
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">BJL</div>
        <div className="nav-menu">
          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/tech">
                {navbarLinks[0]}
              </a>
            </li>
          </ul>

          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/motherhood">
                {navbarLinks[1]}
              </a>
            </li>
          </ul>

          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/recipes">
                {navbarLinks[2]}
              </a>
            </li>
          </ul>

          <ul className="nav-items">
            <li className="nav-links">
              <a className="nav-links" href="/about">
                {navbarLinks[3]}
              </a>
            </li>
          </ul>
        </div>
        <button className="sign-in-button">
          <a className="nav-button-link" href="/signin">
            Sign In
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
