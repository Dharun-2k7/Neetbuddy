import { useState } from "react";

export default function CheckIn() {
  const [studied, setStudied] = useState("");
  const [solved, setSolved] = useState("");
  const [revised, setRevised] = useState("");
  const pct = Math.min(100, Math.round((Number(studied || 0) + Number(solved || 0) + Number(revised || 0)) / 3));

  return (
    <section className="panel">
      <h2>Daily check-in</h2>
      <div className="three-grid">
        <label className="mini-card">
          <h3>Studied</h3>
          <input value={studied} onChange={(e) => setStudied(e.target.value)} placeholder="Hours studied" />
        </label>
        <label className="mini-card">
          <h3>Solved</h3>
          <input value={solved} onChange={(e) => setSolved(e.target.value)} placeholder="MCQs solved" />
        </label>
        <label className="mini-card">
          <h3>Revised</h3>
          <input value={revised} onChange={(e) => setRevised(e.target.value)} placeholder="Chapters revised" />
        </label>
      </div>
      <div className="progress-wrap">
        <div className="pie" style={{ background: `conic-gradient(#55e6ad 0 ${pct}%, rgba(255,255,255,.08) ${pct}% 100%)` }}>
          <span>{pct}%</span>
        </div>
      </div>
    </section>
  );
}