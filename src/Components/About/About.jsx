import React from 'react';
import { Link } from 'react-router-dom';

import './about.scss';

function About() {
  return (
    <>
      <div className="about">
        <main className="about__main">
          <h3 className="about__heading">
            I’m a career-switcher who’s passionate about new technology,
            finance, and&nbsp;
            <span className="about__highlighter">full-stack development.</span>
          </h3>
          <h5 className="about__text-heading">
            Here are some fun facts about me:
          </h5>
          <ul className="about__list">
            <li className="about__list-items">
              14+ years in construction means that I always “have a guy” or
              “know a person who can fix that thing.” (I aim for that person to
              be me in every circumstance, whether plumbing, or code.)
            </li>
            <li className="about__list-items">
              I went back to school (Brainstation) to switch from construction
              to development... during a pandemic... while parenting full-time.
              (I’m tired.)
            </li>
            <li className="about__list-items">
              I'm notorious for my front-to-back-to-side-and-under knowledge of
              podcasts. Fave right now? Syntax: because Javascript.
            </li>
            <li className="about__list-items">
              I like full-stack because I like pouring the foundation and
              deciding on the paint colours (even if my wife disagrees with my
              choices.)
            </li>
            <li className="about__list-items">
              Fave quote:{' '}
              <q>
                You miss 100% of the shots you don't take. - Wayne Gretzky -
                Michael Scott
              </q>
              &nbsp;- Eliezer Toribio
            </li>
          </ul>
          <h6 className="about__list-items about__hire">
            For more hilarious facts:&nbsp;
            <span className="about__highlighter about__highlighter-active">
              <Link className="about__hire-link" to="/Contact">
                Hire me.
              </Link>
            </span>
          </h6>
        </main>
        <div className="custom-shape-divider-bottom-1614098670">
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
      </div>
    </>
  );
}

export default About;
