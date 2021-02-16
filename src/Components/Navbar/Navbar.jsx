import React, { useState } from "react";
import Et from "../../assets/Logo/ET-white.png";
import TopLogo from "../../assets/Logo/EtLogo.png";
import "./Navbar.scss";
import Close from "../../assets/icons/window-close.svg";
import Data from "../../data/data.json";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  let [ham, setHam] = useState(false);
  let [navBarMenu, setNavBarMenu] = useState("navbar__menu--hide");

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
    <nav id="top" className="navbar">
      <div className="navbar__logo-container">
        <Link className="navbar__logo-link" to="/">
          <img className="navbar__logo" src={TopLogo} alt="ET logo" />
        </Link>
        <div onClick={hamburger} className="navbar__mobile">
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-top "></div>
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-center"></div>
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-bottom "></div>
        </div>
      </div>
      <div id="nav__menu" className={navBarMenu}>
        <ul className="navbar__menu-list">
          <button onClick={() => hamburger()} className="navbar__menu-btn">
            <img
              className="navbar__menu-btn-icon"
              src={Close}
              alt="Close icon"
            />
          </button>
          <li className="navbar__list-item">
            <Link
              onClick={() => hamburger()}
              className="navbar__list-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link
              onClick={() => hamburger()}
              className="navbar__list-link"
              to="/projects"
            >
              My Work
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link
              onClick={() => hamburger()}
              className="navbar__list-link"
              to="/Contact"
            >
              Contact Me
            </Link>
          </li>
          <div className="navbar__menu-social">
            {Data.social.map((social) => {
              console.log(social);
              return (
                <a
                  key={uuidv4()}
                  href={social.link}
                  className="navbar__menu-social-links"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    onClick={() => hamburger()}
                    src={social.logo}
                    alt={social.name}
                    className={social.class}
                  />
                </a>
              );
            })}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
