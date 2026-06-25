import { lectures } from "../data/lectures";

export default function Lectures() {
  return (
    <section className="panel">
      <h2>Best lectures</h2>
      <div className="three-grid">
        {Object.entries(lectures).map(([subject, items]) => (
          <div className="mini-card" key={subject}>
            <h3>{subject.toUpperCase()}</h3>
            {items.map((x) => (
              <a key={x.teacher} href={x.url} target="_blank" rel="noreferrer" className="link-row">
                {x.lang} • {x.teacher}
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}