import education from "../data/education.json";

// Education Section
const Education = () => (
  <div className="education-list">
    {education.map((edu, index) => (
      <div className="education-card" key={index}>
        <img src={edu.image} alt={edu.alt} className="education-logo" />
        <h3 className="card-title">{edu.education}</h3>
        <h4>{edu.school}</h4>
        <p className="education-time">
          <strong>{edu.time}</strong>
        </p>
        <p className="education-description">{edu.description}</p>
      </div>
    ))}
  </div>
);

export default Education;
