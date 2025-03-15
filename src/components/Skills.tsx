import skills from "../data/skills.json";

// Skills Section
const Skills = () => (
  <div className="skills-list">
    {skills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <img src={skill.image} alt={skill.alt} className="skill-icon" />
        <h3 className="card-title">{skill.title}</h3>
        <h4>Level: {skill.skill}</h4>
        <p className="education-time">
          <strong>Course: {skill.course}</strong>
        </p>
        <p className="education-description">{skill.description}</p>
      </div>
    ))}
  </div>
);

export default Skills;
