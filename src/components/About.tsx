import { FaDownload } from "react-icons/fa6";

// About Section
const About = () => (
  <>
    <h3 className="hello">
      Hi, <br />
      my name is Eva.
    </h3>
    <h4 className="undertitle">Fullstack Developer</h4>
    <a className="download-link" href="/EvaBjorlingEnglishCV2025.pdf" download>
      CV <FaDownload />
    </a>
    <p style={{ marginTop: "4rem" }}>
      I enjoy finding creative solutions to tricky problems.
    </p>
    <p style={{ marginTop: "4rem", textAlign: "left" }}>And my dog, Stevie.</p>
  </>
);

export default About;
