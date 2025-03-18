import { FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { MdWavingHand, MdSupervisorAccount } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import References from "./References";

// Sections list with IDs, Titles, Icons, Components, and Images
const sections = [
  {
    id: "about",
    title: "Hi",
    icon: <MdWavingHand />,
    component: <About />,
    image: "/frontpage.jpg",
  },
  {
    id: "education",
    title: "Education",
    icon: <FaGraduationCap />,
    component: <Education />,
    image: "/eyes-closed.jpg",
  },
  {
    id: "work",
    title: "Work",
    icon: <FaBriefcase />,
    component: <Work />,
    image: "/sweet.jpg",
  },
  {
    id: "skills",
    title: "Skills",
    icon: <HiSparkles />,
    component: <Skills />,
    image: "/silly.jpg",
  },
  {
    id: "references",
    title: "References",
    icon: <MdSupervisorAccount />,
    component: <References />,
    image: "/apart.jpg",
  },
];

export default sections;
