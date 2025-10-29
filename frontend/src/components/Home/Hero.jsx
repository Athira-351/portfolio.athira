import React from "react";

function Hero() {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(to right, #010008ff, #302b63, #24243e)",
    color: "#fff",
    position: "relative",
    padding: "0 4rem",
    overflow: "hidden",
  };

  const contentStyle = {
    maxWidth: "700px",
    padding: "1rem 1rem 4rem",
    zIndex: 2,
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px",
  };

  const gradientText = {
    background: "linear-gradient(to right, #ec4899, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#d1d5db",
    marginBottom: "10px",
  };

  const subTextStyle = {
    color: "#9ca3af",
    marginBottom: "30px",
  };

  const buttonContainer = {
    display: "flex",
    gap: "16px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  const startButton = {
    ...buttonStyle,
    background: "linear-gradient(to right, #ec4899, #6366f1)",
    color: "#fff",
  };

  const contactButton = {
    ...buttonStyle,
    backgroundColor: "#374151",
    color: "#fff",
  };

  const circleContainer = {
    position: "relative",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, #6366f1, #302b63)",
    boxShadow: "0 0 40px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginRight: "10rem",
    marginTop: "1rem",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <div
          style={{
            backgroundColor: "#10b981",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "600",
            padding: "6px 12px",
            borderRadius: "999px",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          Welcome to my Portfolio
        </div>

        <h1 style={headingStyle}>
          Hi... I'm Athira Anil <span style={gradientText}> — Full Stack Developer.</span>
        </h1>
        <p style={paragraphStyle}>
          With a curious mind and a passion for building, I create digital experiences that merge design and logic. I'm a Full Stack Developer who’s good at what I do—and if you're ready to build something great, let’s do it together.
        </p>

        <p style={subTextStyle}>Let’s join us on this journey</p>

        <div style={buttonContainer}>
          <button style={startButton}>Get Started</button>
          <button style={contactButton}>Hire Me</button>
        </div>
      </div>

      <div style={circleContainer}>
        <img
          src="/uploads/athira-transparent.png" // Replace with your actual image path
          alt="Athira Anil"
          style={imageStyle}
        />
      </div>
    </section>
  );
}

export default Hero;