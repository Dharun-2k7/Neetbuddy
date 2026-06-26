import { classes } from "../data/classes";

export default function ClassPicker({ selectedClass, setSelectedClass, setActive }) {
  return (
    <section className="panel">
      <h2>Choose your programme</h2>
      <p>Select the one that fits your time left.</p>
      <div className="option-list">
        {classes.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelectedClass(opt)}
            className={selectedClass === opt ? "option active" : "option"}
          >
            {opt}
          </button>
        ))}
      </div>
      <button className="primary" onClick={() => setActive("plan")}>
        Generate Study Plan
      </button>
    </section>
  );
}