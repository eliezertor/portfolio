import React from "react";
import "./home.scss";
import eliezer from "../../assets/images/eliezer.jpg";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="about">
      <div className="about__image-container">
        <img className="about__image" src={eliezer} alt="" />
      </div>
      <div className="about__container-paragraph">
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          suscipit tempore recusandae ipsam sunt quisquam exercitationem quas,
          libero tenetur vitae expedita consequatur optio voluptates, deserunt
          corporis nulla asperiores cum nesciunt.
        </p>
        <p className="about__paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla iure
          molestias nobis vitae. Modi voluptatum cumque necessitatibus atque
          doloremque repellat. Nisi repudiandae sapiente porro velit odit quas
          placeat doloremque explicabo?
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
