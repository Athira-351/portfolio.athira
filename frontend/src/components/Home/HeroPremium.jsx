import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4rem",
    padding: "120px 48px 80px",
    position: "relative",
    overflow: "hidden",
    background: "var(--hero-bg)",
    color: "var(--text-primary)",
  };

  const contentStyle = {
    maxWidth: "640px",
    zIndex: 1,
  };

  const headingStyle = {
    fontSize: "clamp(3rem, 4vw, 4.5rem)",
    fontWeight: 800,
    lineHeight: 0.95,
    marginBottom: "1.6rem",
  };

  const paragraphStyle = {
    fontSize: "1.05rem",
    color: "var(--text-muted)",
    marginBottom: "1.8rem",
    lineHeight: 1.8,
  };

  const buttonContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const statStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "24px",
    padding: "1.2rem 1.4rem",
    textAlign: "center",
  };

  const statNumberStyle = {
    display: "block",
    fontSize: "1.6rem",
    fontWeight: 800,
    marginBottom: "0.35rem",
  };

  const visualStyle = {
    minWidth: "360px",
    maxWidth: "520px",
    flex: 1,
    position: "relative",
    zIndex: 1,
  };

  return (
    <section style={sectionStyle} className="hero">
      <div style={contentStyle} className="hero-copy">
        <div className="hero-badge">Global digital experiences</div>
        <h1 style={headingStyle} className="hero-title">
          Hi, I’m <span className="gradient-text">Athira Anil,</span>
          <br /> Building premium digital products.
        </h1>
        <p style={paragraphStyle}>
          I design and develop world-class web experiences for ambitious brands and startups.
          My work blends international-grade UI, polished interaction, and reliable engineering.
        </p>

        <div style={buttonContainer} className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            Let’s Talk
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            View Work
          </Link>
        </div>

        <div className="hero-stats">
          <div style={statStyle} className="hero-stat">
            <strong style={statNumberStyle}>25+</strong>
            <span>Delivered Projects</span>
          </div>
          <div style={statStyle} className="hero-stat">
            <strong style={statNumberStyle}>10+</strong>
            <span>Global Clients</span>
          </div>
          <div style={statStyle} className="hero-stat">
            <strong style={statNumberStyle}>4.9/5</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div style={visualStyle} className="hero-visual">
        <div className="hero-card">
          <h3>Premium design delivered with precision.</h3>
          <p>
            A polished blend of visuals, motion, and modern technology for brands that want to stand out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
