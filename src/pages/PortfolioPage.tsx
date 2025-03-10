import React, { useState } from "react";
import projects from "../data/projects.json"; // assuming the file exists
import { FaAnglesRight, FaAnglesLeft, FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const PortfolioPage = () => {
  // Initial state is set to the first project
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSwitchProject = (index: number) => {
    if (index < 0 || index >= projects.length) return; // Prevent out-of-bounds selection
    setDirection(index > selectedProjectIndex ? 1 : -1);
    setSelectedProjectIndex(index);
  };

  const selectedProject = projects[selectedProjectIndex];

  return (
    <div className="portfolio-container">
      {/* Project Image */}
      <div className="project-img-div">
        <div className="img-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.image}
              className="screenshot"
              style={{
                backgroundImage: `url(${selectedProject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Overlay */}
              <div className="overlay">
                <div className="project-links">
                  <mark>
                    <p>{selectedProject.date}</p>
                  </mark>
                  <mark>
                    <a
                      href={selectedProject.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                  </mark>
                  <mark>
                    <p>{selectedProject.course}</p>
                  </mark>{" "}
                  <mark>
                    <p>{selectedProject.tech}</p>
                  </mark>{" "}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Info */}
      <div className="project-about">
        <nav className="about-nav">
          <FaAnglesLeft
            className="nav-icon"
            style={{
              cursor: selectedProjectIndex === 0 ? "not-allowed" : "pointer",
              opacity: selectedProjectIndex === 0 ? 0.5 : 1,
            }}
            onClick={() => handleSwitchProject(selectedProjectIndex - 1)}
          />
          <FaAnglesRight
            className="nav-icon"
            style={{
              cursor:
                selectedProjectIndex === projects.length - 1
                  ? "not-allowed"
                  : "pointer",
              opacity: selectedProjectIndex === projects.length - 1 ? 0.5 : 1,
            }}
            onClick={() => handleSwitchProject(selectedProjectIndex + 1)}
          />
        </nav>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProjectIndex} // Ensures animation when changing projects
            className="portfolio-display"
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.details}</p>
            <a
              className="view-project"
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioPage;
