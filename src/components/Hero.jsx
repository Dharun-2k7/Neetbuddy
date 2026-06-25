export default function Hero({ setActive, selectedClass }) {
  return (
    <section className="hero grid-2">
      <div>
        <div className="pill">Neetbuddy • 3D study world</div>
        <h2>
          A crafted NEET prep universe for <span>students</span>.
        </h2>
        <p>
          Choose your class, generate your programme, open notes, follow lectures,
          check in daily, and push toward 100% preparation.
        </p>
        <div className="hero-actions">
          <button onClick={() => setActive("class")}>Choose Class</button>
          <button onClick={() => setActive("plan")} className="ghost">
            View Study Plan
          </button>
        </div>
        <p className="tiny">Current programme: {selectedClass}</p>
      </div>

      <div className="scene-card glass">
        <div className="orb orb-a"></div>
        <div className="orb orb-b"></div>
        <div className="orb orb-c"></div>
        <div className="scene-box">
          <div className="floating-card">
            <strong>Monthly Targets</strong>
            <span>Chapters • Tests • Revision</span>
          </div>
          <div className="floating-card">
            <strong>Daily Timetable</strong>
            <span>Morning / Evening / Split-day</span>
          </div>
          <div className="floating-card">
            <strong>100% Prep</strong>
            <span>Track completion visually</span>
          </div>
        </div>
      </div>
    </section>
  );
}