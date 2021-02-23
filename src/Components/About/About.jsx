import React from 'react';
import { Link } from 'react-router-dom';

import './about.scss';

function About() {
  return (
    <div className="about">
      <main className="about__main">
        <h2 className="about__title-heading">Hola! </h2>
        <p className="about__title">&#60;et&#62;</p>
        <h2 className="about__heading">
          I'm <span className="about__highlighter">Eliezer Toribio.</span>
        </h2>
        <p className="about__text">(Eli for short. Eh-li. Not Ee-lai.)</p>
        <p className="about__text">
          I’m a career switcher, a Brainstation grad, and a passionate&nbsp;
          <span className="about__highlighter">full-stack engineer.</span>
        </p>
        <p className="about__text">
          I’m looking for a position as part of a growing, innovative team
          that’s ready to add an extroverted developer,&nbsp;
          <span className="about__highlighter">expert builder,</span>
          &nbsp;and overall friendly human to their team.
        </p>

        <p className="about__text">
          I promise to put a shine on your big dreams with every little git
          commit.
        </p>
        <p className="about__text">&#60;&#47;et&#62;</p>
      </main>
      <div class="custom-shape-divider-bottom-1614098670">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default About;
