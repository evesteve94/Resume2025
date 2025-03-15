import jobs from "../data/work.json";

// Work Section
const Work = () => (
  <div className="work-list">
    {jobs.map((job, index) => (
      <div className="job-card" key={index}>
        <img src={job.image} alt={job.alt} className="education-logo" />
        <h3 className="card-title">
          {job.work} <br />
          {job.company}
        </h3>
        <p className="education-time">
          <strong>{job.time}</strong>
        </p>
        <p className="education-description">{job.description}</p>
      </div>
    ))}
  </div>
);

export default Work;
