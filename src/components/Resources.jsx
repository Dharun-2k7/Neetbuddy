import { physics, chemistry, biology } from "../data/resources";

export default function Resources() {
  return (
    <section className="panel">
      <h2>Resources</h2>
      <div className="three-grid">
        <div className="mini-card">
          <h3>Physics</h3>
          <ul>{physics.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="mini-card">
          <h3>Chemistry</h3>
          <strong>Organic</strong>
          <ul>{chemistry.organic.map((x) => <li key={x}>{x}</li>)}</ul>
          <strong>Physical</strong>
          <ul>{chemistry.physical.map((x) => <li key={x}>{x}</li>)}</ul>
          <strong>Inorganic</strong>
          <ul>{chemistry.inorganic.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="mini-card">
          <h3>Biology</h3>
          <ul>{biology.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}