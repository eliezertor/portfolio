import React from 'react';
import './projects.scss';
import Data from '../../data/data.json';
import { v4 as uuidv4 } from 'uuid';

function Projects() {
  return (
    <div className="Projects">
      <div className="projects__container">
        {/* <h6 className="projects__title">PROJECTS</h6> */}
        {Data.projects.map((projects) => {
          return (
            <>
              <div key={uuidv4()} className="projects__project">
                <>
                  <h2 className="projects__project-title">{projects.name}</h2>
                  <div className="projects__project-link-img">
                    <div className="projects__project-img-container">
                      <img
                        className="projects__project-image"
                        src={projects.image}
                        alt=""
                      />
                      <div className="projects__project-overlay">
                        <div className="projects__project-text">
                          <ul className="projects__project-text-list">
                            {projects.descriptionList.map((list) => {
                              return (
                                <>
                                  <li
                                    key={uuidv4()}
                                    className="projects__project-text"
                                  >
                                    {list.item}
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="projects__link-list">
                          <a
                            className="projects__link"
                            href={projects.link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                            rel="noopener noreferrer"
                          >
                            <img
                              className="projects__link-img"
                              src={projects.linkImg}
                              alt={projects.name}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="projects__project-description">
                    {projects.description}
                  </p>
                </>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
