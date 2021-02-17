import React from "react";
import "./projects.scss";
import Data from "../../data/data.json";

function Projects() {
  return (
    <div className="Projects">
      <div className="projects__container">
        {Data.projects.map((projects) => {
          // console.log(projects);
          return (
            <div className="projects__project">
              <>
                <h5 className="projects__project-title">{projects.name}</h5>
                <img
                  className="projects__project-image"
                  src={projects.image}
                  alt=""
                />
                <p className="projects__project-description">
                  {projects.description}
                </p>
                <div className="projects__link-list">
                  <a
                    className="projects__link"
                    href={projects.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projects__link-img"
                      src={projects.logo}
                      alt={projects.name}
                    />
                  </a>
                  <a
                    className="projects__link"
                    href={projects.webSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projects__link-img"
                      src={projects.linkImg}
                      alt={projects.name}
                    />
                  </a>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
