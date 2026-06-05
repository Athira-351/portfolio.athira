import React from "react";

function Hero() {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "var(--hero-bg)",
    color: "var(--text-primary)",
    position: "relative",
    padding: "0 4rem",
    overflow: "hidden",
    marginBottom: "-150px",
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
    color: "var(--text-muted)",
    marginBottom: "10px",
  };

  const subTextStyle = {
    color: "var(--text-muted)",
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
    background: "var(--btn-bg-alt)",
    color: "#fff",
  };

  const contactButton = {
    ...buttonStyle,
    backgroundColor: "var(--surface-strong)",
    color: "var(--text-primary)",
    border: "1px solid var(--border)",
  };

  const circleContainer = {
    position: "relative",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.18), rgba(15, 12, 41, 0.08))",
    boxShadow: "0 0 40px rgba(0,0,0,0.12)",
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
            backgroundColor: "var(--btn-bg)",
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

      <div style={{ 
        // ...circleContainer,
        position: "relative" 
      }}>
        {/* Right Side Line */}
        <div
          style={{
            position: "absolute",
            right: "0px",
            top: "110px",
            width: "4px",
            height: "70%",
            background: "linear-gradient(180deg, #ffffff 0%, #ffffff 50%, #302b63 100%)",
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(255, 135, 195, 0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-15px",
            top: "200px",
            width: "4px",
            height: "70%",
            background: "linear-gradient(180deg, #ffffff 0%, #ffffff 50%, #302b63 100%)",
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(255, 135, 195, 0.6)",
          }}
        />

        {/* Bottom Line */}
        <div
          style={{
            position: "absolute",
            bottom: "3px",
            left: "0",
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #302b63 0%, #ffffff 50%, #ffffff 100%)",
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-12px",
            left: "0",
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #302b63 0%, #ffffff 50%, #ffffff 100%)",
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
          }}
        />

        {/* <img
          src="/uploads/athira.png"
          alt="Athira Anil"
          style={imageStyle}
        /> */}
        
        
      </div>
    </section>
  );
}

export default Hero;