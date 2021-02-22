import React, { useState } from 'react';
import House from '../../assets/icons/house.svg';
import Door from '../../assets/icons/door2.svg';
import Tree from '../../assets/icons/tree7.svg';
import Shrub1 from '../../assets/icons/shrub1.svg';
import Shrub2 from '../../assets/icons/shrub2.svg';
import Shrub3 from '../../assets/icons/shrub3.svg';
import Frame from '../../assets/icons/frame.svg';
import './intro.scss';

function Intro() {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div className="intro">
      <img
        className="intro__house"
        src={House}
        alt="house"
        // title="intro"
        // frameborder="0"
      ></img>
      <img
        className="intro__house-door"
        src={Door}
        alt="door"
        // title="door"
        // frameborder="0"
      />
      <img className="intro__door-frame" src={Frame} alt="door frame" />
      <img className="intro__shrub" src={Shrub3} alt="shrub" />
      <img className="intro__tree" src={Tree} alt="tree" />
      <div className="intro__chimney">
        <div id="box">
          <div id="chimney-main">
            <div id="chimney-smoke-box">
              <div id="chimney-smoke1" className="chimney-smoke"></div>
              <div id="chimney-smoke2" className="chimney-smoke"></div>
              <div id="chimney-smoke3" className="chimney-smoke"></div>
              <div id="chimney-smoke4" className="chimney-smoke"></div>
              <div id="chimney-smoke5" className="chimney-smoke"></div>
              <div id="chimney-smoke6" className="chimney-smoke"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onScroll={() => zoom()}></button> */}
    </div>
  );
}

export default Intro;
