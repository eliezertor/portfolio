import React from "react";
import Et from "../../assets/Logo/ET-white.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar__logo-container">
        <a class="navbar__logo-link" href="#/">
          <img className="navbar__logo" src={Et} alt="ET logo" />
        </a>
        <div class="navbar__menu">
          <ul class="navbar__menu-list">
            <li class="navbar__list-item">
              {" "}
              <a class="navbar__list-link" href="#/">
                About Me
              </a>
            </li>
            <li class="navbar__list-item">
              {" "}
              <a class="navbar__list-link" href="#/">
                {" "}
                My Work
              </a>
            </li>
            <li class="navbar__list-item">
              {" "}
              <a class="navbar__list-link" href="#/">
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
