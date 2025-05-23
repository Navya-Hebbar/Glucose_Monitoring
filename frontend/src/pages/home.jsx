import React from "react";
import "./Home.css";
import Navigation from "../assets/components/navigation";

export default function Home() {
  return (
    <div className="home-container">
      <Navigation/> {/* Always at the top */}
      
      <div className="home-main">
        <div className="home-content">
          <h1 className="home-title">Smart Blood Glucose Monitoring</h1>
          <p className="home-description">
            A futuristic healthcare solution for continuous diabetes monitoring
            using ESP32, Machine Learning, and digital health records. Designed
            especially for elderly users and pregnant women with gestational diabetes.
          </p>
          <div className="home-buttons">
            <button className="home-btn primary">Learn More</button>
            <button className="home-btn secondary">Try the Demo</button>
          </div>
        </div>
      </div>

      <footer className="home-footer">© 2025 GlucoTrack | Designed with ❤️</footer>
    </div>
  );
}
