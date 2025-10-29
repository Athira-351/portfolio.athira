import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  const pageStyle = {
    // background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    color: "#1e293b",
    paddingTop: "100px", // offset for fixed navbar
    paddingBottom: "80px",
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #f59e0b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  };

  const subheadingStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#475569",
    marginBottom: "50px",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.8",
  };

  const sectionStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    textAlign: "left",
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "all 0.4s ease",
    border: "1px solid rgba(255,255,255,0.2)",
    position: "relative",
    overflow: "hidden",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    e.currentTarget.style.background =
      "linear-gradient(135deg, #eef2ff 0%, #fdf4ff 100%)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
    e.currentTarget.style.background =
      "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)";
  };

  const cardTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#1e293b",
    background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardText = {
    fontSize: "16px",
    color: "#475569",
    lineHeight: "1.8",
  };

  const glowCircle = {
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "120px",
    height: "120px",
    background:
      "radial-gradient(circle, rgba(236,72,153,0.3), rgba(255,255,255,0))",
    borderRadius: "50%",
    zIndex: 0,
  };

  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={headingStyle}>About Me</h1>
          <p style={subheadingStyle}>
            I’m a passionate Software Developer who loves transforming creative ideas
            into modern, user-friendly web applications. I focus on crafting
            interfaces that are both beautiful and technically efficient, blending
            art and logic to create seamless digital experiences.
          </p>

          <div style={sectionStyle}>
            {/* Card 1 */}
            <div
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <div style={glowCircle}></div>
              <h3 style={cardTitle}>Who I Am</h3>
              <p style={cardText}>
                A curious mind with a love for front-end and full-stack development.
                I enjoy working with React, Express, and Vite — turning ideas into
                interactive and responsive digital realities.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <div style={glowCircle}></div>
              <h3 style={cardTitle}>What I Do</h3>
              <p style={cardText}>
                I build intuitive web apps with clean UI/UX using React, Tailwind CSS,
                and animation effects. I also integrate APIs and optimize performance
                for smooth, fast user experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <div style={glowCircle}></div>
              <h3 style={cardTitle}>My Vision</h3>
              <p style={cardText}>
                To grow as a creative problem solver and tech enthusiast who blends
                innovation with design. My goal is to contribute to projects that
                inspire, empower, and make a real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
