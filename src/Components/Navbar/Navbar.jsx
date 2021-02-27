import React, { useState } from 'react';
import './Navbar.scss';
import Close from '../../assets/icons/window-close.svg';
import Data from '../../data/data.json';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ET from '../../assets/Logo/ETM.png';
import Bike from '../../assets/Logo/bike.png';

const Navbar = () => {
  let [ham, setHam] = useState(false);
  let [navBarMenu, setNavBarMenu] = useState('navbar__menu--hide');

  let hamburger = () => {
    if (ham === false) {
      setNavBarMenu('navbar__menu');
      setHam(true);
    } else if (ham === true) {
      setNavBarMenu('navbar__menu--hide');
      setHam(false);
    }
  };

  let location = window.location.pathname;

  let home;
  let projects;
  let contact;

  if (location === '/') {
    home = 'navbar__list-link--active';
  } else if (location === '/About') {
    projects = 'navbar__list-link--active';
  } else if (location === '/Contact') {
    contact = 'navbar__list-link--active';
  }

  return (
    <nav id="top" className="navbar">
      <div className="navbar__logo-container">
        <Link className="navbar__logo-link" to="/">
          <img className="navbar__logo" src={ET} alt="Logo" />
          <img className="navbar__logo-bike" src={Bike} alt="Logo" />
        </Link>
        <div onClick={() => hamburger()} className="navbar__mobile">
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-top "></div>
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-center"></div>
          <div className="navbar__mobile-hamburger navbar__mobile-hamburger-bottom "></div>
        </div>

        <div id="navbar__menu" className={navBarMenu}>
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
                className={`navbar__list-link ${home}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                onClick={() => hamburger()}
                className={`navbar__list-link ${projects}`}
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                onClick={() => hamburger()}
                className={`navbar__list-link ${contact}`}
                to="/Contact"
              >
                Contact Me
              </Link>
            </li>
            <div className="navbar__menu-social">
              {Data.social.map((social) => {
                return (
                  <a
                    key={uuidv4()}
                    href={social.link}
                    className="navbar__menu-social-links "
                    target="_blank"
                    rel="noopener noreferrer"
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
      </div>
    </nav>
  );
};

export default Navbar;
