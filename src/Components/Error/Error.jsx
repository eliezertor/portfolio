import React from 'react';
import { Link } from 'react-router-dom';
import Cry from '../../assets/icons/sad-tear-regular.svg';
import Bike from '../../assets/Logo/bike.png';

import './error.scss';

function Error() {
  return (
    <div className="error">
      <div className="error__container">
        <img className="error__img" src={Bike} alt="Sad Icon" />
        <p className="error__code">
          Sorry, this page doesn't exist. Please check the URL or go back a
          page.
        </p>
        <p className="error__code"> 404 Error. Page Not Found.</p>
        <button className="error__btn">
          <Link className="error__link" to="/">
            TAKE ME HOME
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Error;
