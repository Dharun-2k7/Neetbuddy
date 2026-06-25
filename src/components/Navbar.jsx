export default function Navbar({ active, setActive }) {
  const items = [
    ["home", "Home"],
    ["class", "Choose Class"],
    ["plan", "Study Plan"],
    ["resources", "Resources"],
    ["lectures", "Lectures"],
    ["checkin", "Daily Check-in"],
    ["progress", "Progress"],
  ];

  return (
    <header className="nav glass">
      <div className="brand">
        <img src="/logo.jpeg" alt="Neetbuddy logo" className="brand-logo" />
        <div>
          <h1>Neetbuddy</h1>
          <p>Study world for NEET prep</p>
        </div>
      </div>
      <nav>
        {items.map(([key, label]) => (
          <button
            key={key}
            className={active === key ? "nav-btn active" : "nav-btn"}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}