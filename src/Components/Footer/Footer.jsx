import React from "react";
import FooterLogo from "../../assets/Logo/ET-white.png";
import Policy from "../Policy/Policy";
import { Link } from "react-router-dom";

import "./footer.scss";

function Footer() {
  let year = new Date().getFullYear();

  let top = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__logo-container">
        <button className="footer__logo-btn" onClick={() => top()}>
          <img className="footer__logo" src={FooterLogo} alt="Footer Logo" />
        </button>
      </div>
      <div className="footer__date">
        © {year} EliezerToribio.com, all rights reserved
      </div>
      <Link className="footer__policy" to="/policy">
        Policy and Terms
      </Link>
    </div>
  );
}

export default Footer;
