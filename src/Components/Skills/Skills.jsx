import React from 'react';
import './skills.scss';
import Data from '../../data/data.json';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <div className="custom-shape-divider-top-1614044863">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {Data.skills.map((logo) => {
          return (
            <img
              key={uuidv4()}
              className={logo.class}
              src={logo.logo}
              alt={logo.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
