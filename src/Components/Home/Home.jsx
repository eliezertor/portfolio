import React from 'react';
import './home.scss';
// import eliezer from '../../assets/images/eliezer3.jpg';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { v4 as uuidv4 } from 'uuid';

import Data from '../../data/data.json';

const Home = () => {
  return (
    <>
      <div className="about">
        <div className="about__container-paragraph">
          <main className="about__paragraph">
            {/* <h2>Hola! </h2> */}
            <p>&#60;et&#62;</p>
            <h2 className="about__break">
              I'm <span className="about__highlighter">Eliezer Toribio.</span>
            </h2>
            <p className="about__break">(Eli for short. Eh-li. Not Ee-lai.)</p>
            <p className="about__break">
              I’m a career switcher, a Brainstation grad, and a passionate&nbsp;
              <span className="about__highlighter">full-stack engineer.</span>
            </p>
            <p className="about__break">
              I’m looking for a position as part of a growing, innovative team
              that’s ready to add an extroverted developer,&nbsp;
              <span className="about__highlighter">expert builder,</span>
              &nbsp;and overall friendly human to their team.
            </p>

            <p className="about__break">
              I promise to put a shine on your big dreams with every little git
              commit.
            </p>
            <p className="about__break">&#60;&#47;et&#62;</p>
            <div className="about__btn-container">
              <button className="about__btn--fill">DOWNLOAD RESUME</button>
              <button className="about__btn"> CONTACT ME</button>
            </div>
          </main>
        </div>

        <Skills />
        <Projects />
        <div className="about__social--links ">
          {Data.social.map((social) => {
            return (
              <a
                key={uuidv4()}
                href={social.link}
                className="about__social-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.logo}
                  alt={social.name}
                  className={social.class}
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
