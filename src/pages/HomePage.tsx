import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";
import sections from "../components/Sections";

const HomePage = () => {
  const [flash, setFlash] = useState(false);

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

  // Keyboard navigation handling
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSwitchComponent(index);
    }
  };

  // Flash animation trigger to hint the navbar (runs only once after 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setFlash(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hello-container">
      <div className="greeting">
        {/* Navigation Bar */}
        <nav className="about-nav" aria-label="Section navigation">
          <FaAnglesLeft
            className="nav-icon"
            onClick={() =>
              handleSwitchComponent(
                (currentComponent - 1 + sections.length) % sections.length
              )
            }
            style={{ cursor: "pointer" }}
            aria-label="Previous section"
          />
          {sections.map((section, index) => (
            <button
              key={index}
              className={index === currentComponent ? "active" : ""}
              onClick={() => handleSwitchComponent(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              aria-label={`Go to ${section.title} section`}
              role="tab"
              tabIndex={0}
            >
              <span>
                {section.icon} {index === currentComponent && section.title}
              </span>
            </button>
          ))}
          <motion.div
            animate={flash ? { color: ["#254441", "#fdac34", "#254441"] } : {}}
            transition={{ duration: 1, repeat: 1 }}
          >
            <FaAnglesRight
              className="nav-icon"
              onClick={() =>
                handleSwitchComponent((currentComponent + 1) % sections.length)
              }
              style={{ cursor: "pointer" }}
              aria-label="Next section"
            />
          </motion.div>
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
            {sections[currentComponent].component}
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
              backgroundImage: `url(${sections[currentComponent].image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            aria-hidden="true"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
