import references from "../data/references.json";

// References Section
const References = () => (
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

export default References;
