const weightage = [
  ["Physics", 78],
  ["Chemistry", 82],
  ["Biology", 90],
  ["Mock tests", 74],
  ["Revision", 68],
];

export default function Progress() {
  return (
    <section className="panel">
      <h2>Weightage and progress</h2>
      <div className="bars">
        {weightage.map(([label, value]) => (
          <div key={label} className="bar-row">
            <span>{label}</span>
            <div className="track">
              <i style={{ width: `${value}%` }}></i>
            </div>
            <strong>{value}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}