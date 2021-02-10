import React from "react";
import "./skills.scss";
import Data from "../../data/data.json";

console.log(Data.skills);

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        {Data.skills.map((logo) => {
          return <img className={logo.class} src={logo.logo} alt={logo.name} />;
        })}
      </div>
    </div>
  );
};
export default Skills;
