import React from "react";
import "./home.scss";
import eliezer from "../../assets/images/eliezer.jpg";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="about">
      <div className="about__container-paragraph">
        <div className="about__paragraph">
          <h2>Hola! </h2>
          <p>&#60;et&#62;</p>
          <p className="about__break">
            I'm <span className="about__highlighter">Eliezer Toribio.</span>
          </p>
          <p className="about__break">(Eli for short. Eh-li. Not Ee-lai.)</p>
          <p className="about__break">
            I’m a former business owner, a career switcher, and a
            passionate&nbsp;
            <span className="about__highlighter">full-stack engineer.</span>
          </p>
          <p className="about__break">
            Over the years, my passion for&nbsp;
            <span className="about__highlighter">problem-solving</span>
            &nbsp;transitioned me from physically managing massive construction
            projects to building digital homes and experiences.
          </p>
          <p className="about__break">
            I’m looking for a position as part of a growing, innovative team
            that’s ready to add an extroverted developer,&nbsp;
            <span className="about__highlighter">expert builder,</span>
            &nbsp;and overall friendly human to their team.
          </p>
        </div>
        <div className="about__paragraph">
          <p className="about__break">Things that matter:</p>
          <ul>
            <li className="about__break">
              14+ years in construction means that I always “have a guy” or
              “know a person who can fix that thing.” (I aim for that person to
              be me in every circumstance, whether plumbing, or code.)
            </li>
            <li className="about__break">
              I went back to school (Brainstation) to switch&nbsp;
              <span className="about__highlighter">
                from construction to development
              </span>
              ... during a pandemic... while parenting full-time. (I’m tired.)
            </li>
            <li className="about__break">
              I'm notorious for my front-to-back-to-side-and-under knowledge of
              podcasts. Fave right now? Syntax: because Javascript.{" "}
            </li>
            <li className="about__break">
              I like full-stack because I like pouring the foundation and
              deciding on the paint colours (even if my wife disagrees with my
              choices.)
            </li>
          </ul>
          <p className="about__break">For more hilarious facts: hire me.</p>
          <p className="about__break">
            I promise to put a shine on your big dreams with every little git
            commit.
          </p>
          <p className="about__break">&#60;&#47;et&#62;</p>
        </div>
      </div>
      <div className="about__image-container about__image-container-reverse">
        <img className="about__image" src={eliezer} alt="" />
      </div>
      <Skills />
    </div>
  );
};

export default Home;
