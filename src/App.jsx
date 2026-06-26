import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClassPicker from "./components/ClassPicker";
import Planner from "./components/Planner";
import Resources from "./components/Resources";
import Lectures from "./components/Lectures";
import CheckIn from "./components/CheckIn";
import Progress from "./components/Progress";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState("home");
  const [selectedClass, setSelectedClass] = useState("Class 11 - 2 Year Programme");

  return (
    <div className="app-shell">
      <Navbar active={active} setActive={setActive} />
      {active === "home" && <Hero setActive={setActive} selectedClass={selectedClass} />}
      {active === "class" && (
        <ClassPicker
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          setActive={setActive}
        />
      )}
      {active === "plan" && <Planner selectedClass={selectedClass} />}
      {active === "resources" && <Resources />}
      {active === "lectures" && <Lectures />}
      {active === "checkin" && <CheckIn />}
      {active === "progress" && <Progress />}

      <footer className="footer">
        <span>Neetbuddy • Founder: Siva Hari Baalan</span>
        <span>sivahifi360@gmail.com</span>
      </footer>
    </div>
  );
}
