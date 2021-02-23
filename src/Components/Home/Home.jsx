import React from 'react';
import './home.scss';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Data from '../../data/data.json';

let resume =
  'https://drive.google.com/uc?export=download&id=1EMfg5NFd-GNQVA1PpIvubErRC-uoe4AO';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container-paragraph">
          <main className="home__paragraph">
            {/* <h2>Hola! </h2> */}
            <p>&#60;et&#62;</p>
            <h2 className="home__break">
              I'm <span className="home__highlighter">Eliezer Toribio.</span>
            </h2>
            <p className="home__break">(Eli for short. Eh-li. Not Ee-lai.)</p>
            <p className="home__break">
              I’m a career switcher, a Brainstation grad, and a passionate&nbsp;
              <span className="home__highlighter">full-stack engineer.</span>
            </p>
            <p className="home__break">
              I’m looking for a position as part of a growing, innovative team
              that’s ready to add an extroverted developer,&nbsp;
              <span className="home__highlighter">expert builder,</span>
              &nbsp;and overall friendly human to their team.
            </p>

            <p className="home__break">
              I promise to put a shine on your big dreams with every little git
              commit.
            </p>
            <p className="home__break">&#60;&#47;et&#62;</p>
            <div className="home__btn-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
                className="home__btn--fill"
              >
                DOWNLOAD RESUME
              </a>
              <Link className="home__btn-link" to="/Contact">
                CONTACT ME
              </Link>
            </div>
          </main>
        </div>

        <Skills />
        <Projects />
        <div className="home__social--links ">
          {Data.social.map((social) => {
            return (
              <a
                key={uuidv4()}
                href={social.link}
                className="home__social-links"
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
