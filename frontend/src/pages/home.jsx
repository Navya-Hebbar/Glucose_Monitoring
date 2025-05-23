import React from "react";
import "./Home.css";

const features = [
  {
    title: "Real-Time Glucose Monitoring",
    description:
      "Continuous updates using ESP32-based glucometer for instant health insights.",
    icon: "📈",
  },
  {
    title: "Machine Learning Insights",
    description:
      "Smart analysis predicting trends and providing personalized feedback.",
    icon: "🤖",
  },
  {
    title: "Digital Health History",
    description:
      "Automatic logging of glucose levels with easy sharing for doctors.",
    icon: "📋",
  },
  {
    title: "User-Friendly Dashboard",
    description:
      "Visualize your health data with charts, reports, and actionable tips.",
    icon: "📊",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo glow">GlucoseTrack</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="/login" className="btn-glow">Login</a></li>
          <li><a href="/register" className="btn-glow">Register</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-text glow">
          <h1>Digital Health & Machine Learning for Blood Glucose Monitoring</h1>
          <p>
            Smart, automatic, and insightful management to empower patients and doctors alike.
          </p>
          <a href="#features" className="btn-primary glow">Explore Features</a>
        </div>
        <div className="hero-visual glow"></div>
      </header>

      <section id="features" className="carousel-section">
        <h2 className="section-title glow">Features</h2>
        <div className="carousel">
          {features.map((f, idx) => (
            <div key={idx} className="carousel-card glow-hover">
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="dashboard" className="dashboard-section glow">
        <h2 className="section-title glow">Dashboard Preview</h2>
        <div className="dashboard-preview glow">
          <div className="graph-placeholder glow-hover">📈 Glucose Trends</div>
          <div className="stats-placeholder glow-hover">
            <p>Average Glucose: <strong>110 mg/dL</strong></p>
            <p>Alerts: <strong>None</strong></p>
            <p>Last Check: <strong>10 mins ago</strong></p>
          </div>
        </div>
      </section>

      <footer className="footer glow">
        &copy; 2025 GlucoseTrack. All rights reserved.
      </footer>

      <div className="background-animation"></div>
    </div>
  );
};

export default Home;
