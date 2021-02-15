import React, { useState } from "react";
import Et from "../../assets/Logo/ET-white.png";
import "./Navbar.scss";

const Navbar = () => {
  let [ham, setHam] = useState(false);

  console.log(ham);
  let [navBarMenu, setNavBarMenu] = useState("navbar__menu--hide");
  let window;

  // FIXME: the event always sets to false need to fix
  document.addEventListener("click", function (e) {
    // console.log(e.isTrusted);
    e.preventDefault();
    if (ham === true) {
      return setHam(false);
    }
  });

  let hamburger = () => {
    if (ham === false) {
      setHam(true);
      setNavBarMenu("navbar__menu");
    } else if (ham === true) {
      setHam(false);
      setNavBarMenu("navbar__menu--hide");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <a className="navbar__logo-link" href="#/">
          <img className="navbar__logo" src={Et} alt="ET logo" />
        </a>
        <div onClick={hamburger} className="navbar__mobile">
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-top "></div>
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-center"></div>
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-bottom "></div>
        </div>
      </div>
      <div className={navBarMenu}>
        <ul className="navbar__menu-list">
          <li className="navbar__list-item">
            <a className="navbar__list-link" href="#/">
              About Me
            </a>
          </li>
          <li className="navbar__list-item">
            <a className="navbar__list-link" href="#/">
              My Work
            </a>
          </li>
          <li className="navbar__list-item">
            <a className="navbar__list-link" href="#/">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
