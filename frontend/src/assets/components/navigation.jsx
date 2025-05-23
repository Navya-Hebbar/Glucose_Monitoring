import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header className="topbar">
        <button
          className={`hamburger ${sidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo glow">GlucoseTrack</div>
      </header>

      <nav className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <ul className="sidebar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="/login" className="btn-glow">Login</a></li>
          <li><a href="/register" className="btn-glow">Register</a></li>
        </ul>
      </nav>

      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navigation;
