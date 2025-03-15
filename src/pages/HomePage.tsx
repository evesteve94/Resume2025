import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaAnglesRight, FaAnglesLeft, FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { MdWavingHand, MdSupervisorAccount } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import About from "../components/About";
import Work from "../components/Work";
import Education from "../components/Education";
import Skills from "../components/Skills";
import References from "../components/References";
import "../styles/home.css";

// Profile images from public folder
const images = [
  "/frontpage.jpg",
  "/eyes-closed.jpg",
  "/sweet.jpg",
  "/silly.jpg",
  "/apart.jpg",
];

// Sections list with IDs and Icons
const sections = [
  { id: "about", title: "Hi", icon: <MdWavingHand /> },
  { id: "education", title: "Education", icon: <FaGraduationCap /> },
  { id: "work", title: "Work", icon: <FaBriefcase /> },
  { id: "skills", title: "Skills", icon: <HiSparkles /> },
  { id: "references", title: "References", icon: <MdSupervisorAccount /> },
];

// Components array (for easier mapping)
const components = [
  <About />,
  <Education />,
  <Work />,
  <Skills />,
  <References />,
];

// Home Page Component
const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get initial component index from URL hash
  const getInitialComponent = () => {
    const hash = location.hash.replace("#", "");
    const index = sections.findIndex((section) => section.id === hash);
    return index !== -1 ? index : 0;
  };

  const [currentComponent, setCurrentComponent] = useState(getInitialComponent);
  const [direction, setDirection] = useState(1);

  // Update the URL when the component changes
  useEffect(() => {
    navigate(`#${sections[currentComponent].id}`, { replace: true });
  }, [currentComponent, navigate]);

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
          {sections.map((section, index) => (
            <button
              key={index}
              className={index === currentComponent ? "active" : ""}
              onClick={() => handleSwitchComponent(index)}
            >
              <span>
                {section.icon} {index === currentComponent && section.title}
              </span>
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
            transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
