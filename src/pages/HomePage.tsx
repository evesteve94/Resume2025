import React, { useState } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import education from "../data/education.json";
import jobs from "../data/work.json";
import skills from "../data/skills.json";
import references from "../data/references.json";

//profile images
import first from "../../public/frontpage.jpg";
import second from "../../public/apart.jpg";
import third from "../../public/sweet.jpg";
import forth from "../../public/silly.jpg";
import fifth from "../../public/eyes-closed.jpg";

const About = () => (
  <>
    <h3 className="hello">
      Hi, <br />
      my name is Eva.
    </h3>
    <h4 className="undertitle">fullstack developer</h4>
    <p style={{ marginTop: "4rem" }}>
      I enjoy finding creative solutions to tricky problems.
    </p>
    <p style={{ marginTop: "4rem", textAlign: "left" }}>And my dog, Stevie.</p>
  </>
);

export const Education = () => (
  <div className="education-list">
    {education.map((edu, index) => (
      <div className="education-card" key={index}>
        <img src={edu.image} alt={edu.alt} className="education-logo" />
        <h3 className="card-title">{edu.education}</h3>
        <h4>{edu.school}</h4>
        <p className="education-time">{edu.time}</p>
        <p className="education-description">{edu.description}</p>
      </div>
    ))}
  </div>
);

export const Work = () => (
  <div className="work-list">
    {jobs.map((job, index) => (
      <div className="job-card" key={index}>
        <img src={job.image} alt={job.alt} className="education-logo" />
        <h3 className="card-title">
          {job.work} <br />
          {job.company}
        </h3>
        <p className="education-time">{job.time}</p>
        <p className="education-description">{job.description}</p>
      </div>
    ))}
  </div>
);

export const Skills = () => (
  <div className="skills-list">
    {skills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <img src={skill.image} alt={skill.alt} className="skill-icon" />
        <h3 className="card-title">{skill.title}</h3>
        <h4>Level: {skill.skill}</h4>
        <p className="education-time">Course: {skill.course}</p>
        <p className="education-description">{skill.description}</p>
      </div>
    ))}
  </div>
);

export const References = () => (
  <div className="references-list">
    {references.map((ref, index) => (
      <div className="ref-card" key={index}>
        <img src={ref.image} alt="" />
        <h3 className="card-title">{ref.name}</h3>
        <h4>{ref.jobtitle}</h4>
        <h4>{ref.company}</h4>
        <p>{ref.email}</p>
        <p>{ref.phone}</p>
      </div>
    ))}
  </div>
);

const images = [first, second, third, forth, fifth]; // Background images in order

const HomePage = () => {
  const titles = ["Hello", "Education", "Work", "Skills", "References"];
  const components = [
    <About />,
    <Education />,
    <Work />,
    <Skills />,
    <References />,
  ];

  const [currentComponent, setCurrentComponent] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSwitchComponent = (index: number) => {
    if (index === currentComponent) return;
    setDirection(index > currentComponent ? 1 : -1);
    setCurrentComponent(index);
  };

  return (
    <div className="hello-container">
      <div className="greeting">
        {/* Navigation Bar */}
        <nav className="about-nav">
          <FaAnglesLeft
            className="nav-icon"
            onClick={() =>
              handleSwitchComponent(
                (currentComponent - 1 + components.length) % components.length
              )
            }
            style={{ cursor: "pointer" }}
          />
          {titles.map((title, index) => (
            <button
              key={index}
              className={index === currentComponent ? "active" : ""}
              onClick={() => handleSwitchComponent(index)}
            >
              {title}
            </button>
          ))}
          <FaAnglesRight
            onClick={() =>
              handleSwitchComponent((currentComponent + 1) % components.length)
            }
            style={{ cursor: "pointer" }}
            className="nav-icon"
          />
        </nav>

        {/* Animated Component Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentComponent}
            className="display"
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {components[currentComponent]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Image with Fade Transition */}
      <div className="img-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentComponent}
            className="img-div"
            style={{
              backgroundImage: `url(${images[currentComponent]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
