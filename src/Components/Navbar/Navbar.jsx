import React from "react";
import Et from "../../assets/Logo/ET-white.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <a className="navbar__logo-link" href="#/">
          <img className="navbar__logo" src={Et} alt="ET logo" />
        </a>
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__list-item">
              {" "}
              <a className="navbar__list-link" href="#/">
                About Me
              </a>
            </li>
            <li className="navbar__list-item">
              {" "}
              <a className="navbar__list-link" href="#/">
                {" "}
                My Work
              </a>
            </li>
            <li className="navbar__list-item">
              {" "}
              <a className="navbar__list-link" href="#/">
                {" "}
                Contant Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
