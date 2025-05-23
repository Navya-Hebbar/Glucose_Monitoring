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
      
<section className="feature-carousel-section">
  <h2 className="carousel-title">Explore Our Features</h2>
  <div className="feature-carousel">
    {[
      {
        title: "Real-Time Glucose Tracking",
        description: "Monitor sugar levels using IoT-enabled ESP32.",
        image: "https://unsplash.com/photos/a-thermometer-and-a-purple-pen-on-a-white-surface-RXqcwVrEKWI"
      },
      {
        title: "ML-Based Risk Prediction",
        description: "Smart alerts using machine learning trends.",
        image: "https://source.unsplash.com/800x500/?ai,healthcare"
      },
      {
        title: "Doctor Integration",
        description: "Easily share insights with your healthcare provider.",
        image: "https://source.unsplash.com/800x500/?doctor,clinic"
      }
    ].map((card, idx) => (
      <div key={idx} className="feature-card">
        <img src={card.image} alt={card.title} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    ))}
  </div>
</section>

<section className="stats-section">
  <div className="stat">
    <h2>10K+</h2>
    <p>Patients Helped</p>
  </div>
  <div className="stat">
    <h2>99%</h2>
    <p>Prediction Accuracy</p>
  </div>
  <div className="stat">
    <h2>24/7</h2>
    <p>Monitoring</p>
  </div>
</section>

<section className="quote-banner">
  <p>"Technology that cares — one drop at a time."</p>
</section>

      <footer className="home-footer">© 2025 GlucoTrack | Designed with ❤️</footer>
    </div>
  );
}
