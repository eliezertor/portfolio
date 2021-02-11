import React from "react";
import "./skills.scss";
import Data from "../../data/data.json";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
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
