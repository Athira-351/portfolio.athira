import React, { useState } from "react";
import Navbar from "../components/Navbar";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const pageStyle = {
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    color: "#1e293b",
    paddingTop: "100px",
    paddingBottom: "80px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #f59e0b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
    textAlign: "center",
  };

  const subheadingStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#475569",
    marginBottom: "50px",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.8",
    textAlign: "center",
  };

  const tabButtonsStyle = {
    display: "flex",
    gap: "15px",
    marginBottom: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const tabButtonStyle = (isActive) => ({
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    background: isActive
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "white",
    color: isActive ? "white" : "#667eea",
    boxShadow: isActive
      ? "0 8px 20px rgba(102, 126, 234, 0.3)"
      : "0 4px 12px rgba(0,0,0,0.1)",
  });

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

  const serviceIconStyle = {
    fontSize: "40px",
    marginBottom: "15px",
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
          <h1 style={headingStyle}>Hi, I'm Athira Anil</h1>
          <p style={subheadingStyle}>
            A passionate Full-Stack Developer & Creative Designer specializing in
            building beautiful, responsive websites and creating stunning digital designs.
          </p>

          {/* Tab Buttons */}
          <div style={tabButtonsStyle}>
            <button
              style={tabButtonStyle(activeTab === "about")}
              onClick={() => setActiveTab("about")}
            >
              👤 About Me
            </button>
            <button
              style={tabButtonStyle(activeTab === "services")}
              onClick={() => setActiveTab("services")}
            >
              ⚡ Services
            </button>
            <button
              style={tabButtonStyle(activeTab === "expertise")}
              onClick={() => setActiveTab("expertise")}
            >
              🎯 Expertise
            </button>
          </div>

          {/* About Tab */}
          {activeTab === "about" && (
            <div style={sectionStyle}>
              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Who I Am</h3>
                <p style={cardText}>
                  A passionate and creative Full-Stack Developer with expertise in building
                  modern web applications. I blend technical excellence with creative design
                  to deliver innovative digital solutions that exceed expectations.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>What I Do</h3>
                <p style={cardText}>
                  I craft intuitive web experiences using React, Express.js, and modern CSS
                  frameworks. From responsive layouts to seamless animations, I ensure every
                  pixel serves a purpose while maintaining clean, maintainable code.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>My Passion</h3>
                <p style={cardText}>
                  I'm driven by creating meaningful digital experiences that solve real problems.
                  Whether it's building feature-rich applications or designing visually stunning
                  interfaces, I bring creativity and precision to every project.
                </p>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div style={sectionStyle}>
              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <div style={serviceIconStyle}>🌐</div>
                <h3 style={cardTitle}>Web Development</h3>
                <p style={cardText}>
                  <strong>Creative & Responsive Websites:</strong> Building modern, high-performance
                  websites with React.js, Express.js, and responsive design principles. Fully
                  functional web applications optimized for all devices.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <div style={serviceIconStyle}>🎨</div>
                <h3 style={cardTitle}>UI/UX Design</h3>
                <p style={cardText}>
                  <strong>Website Design & Prototyping:</strong> Creating beautiful, user-centric
                  designs using Figma. Custom layouts, color schemes, and interactive prototypes
                  that bring your vision to life with precision.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <div style={serviceIconStyle}>🏷️</div>
                <h3 style={cardTitle}>Logo Design</h3>
                <p style={cardText}>
                  <strong>Unique & Professional Logos:</strong> Designing memorable brand identities
                  with creative visuals. From concept to final artwork, creating logos that represent
                  your brand essence perfectly.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <div style={serviceIconStyle}>📄</div>
                <h3 style={cardTitle}>Poster Design</h3>
                <p style={cardText}>
                  <strong>Eye-Catching Posters:</strong> Creating impactful poster designs for events,
                  promotions, and announcements. Compelling layouts with stunning visuals that grab
                  attention and communicate your message effectively.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <div style={serviceIconStyle}>📢</div>
                <h3 style={cardTitle}>Static Ads Design</h3>
                <p style={cardText}>
                  <strong>Engaging Advertisement Designs:</strong> Creating static ads for social media,
                  banners, and web platforms. Optimized visuals with clear calls-to-action that drive
                  engagement and conversions.
                </p>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <div style={serviceIconStyle}>✨</div>
                <h3 style={cardTitle}>Brand Identity</h3>
                <p style={cardText}>
                  <strong>Complete Design Solutions:</strong> Developing comprehensive brand identities
                  that include logos, color palettes, typography, and design guidelines. Building a
                  cohesive visual language for your brand.
                </p>
              </div>
            </div>
          )}

          {/* Expertise Tab */}
          {activeTab === "expertise" && (
            <div style={sectionStyle}>
              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Frontend Skills</h3>
                <div style={cardText}>
                  <p>
                    <strong>Languages:</strong> HTML, CSS, JavaScript
                  </p>
                  <p>
                    <strong>Frameworks & Libraries:</strong> React.js, Bootstrap, Reactstrap
                  </p>
                  <p>
                    <strong>Tools:</strong> Vite, Tailwind CSS, Responsive Design
                  </p>
                </div>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Backend Skills</h3>
                <div style={cardText}>
                  <p>
                    <strong>Languages:</strong> JavaScript (Node.js), Python, PHP
                  </p>
                  <p>
                    <strong>Frameworks:</strong> Express.js, Laravel
                  </p>
                  <p>
                    <strong>Architecture:</strong> REST APIs, Server-side Rendering
                  </p>
                </div>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Database & Tools</h3>
                <div style={cardText}>
                  <p>
                    <strong>Databases:</strong> MySQL, MongoDB, NoSQL
                  </p>
                  <p>
                    <strong>Design & Prototyping:</strong> Figma, UI/UX Design
                  </p>
                  <p>
                    <strong>Version Control:</strong> Git, GitHub
                  </p>
                </div>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Design Expertise</h3>
                <div style={cardText}>
                  <p>
                    <strong>Logo Design:</strong> Brand identity & visual concepts
                  </p>
                  <p>
                    <strong>Poster Design:</strong> Event & promotional materials
                  </p>
                  <p>
                    <strong>Ad Design:</strong> Social media & web ads
                  </p>
                </div>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Soft Skills</h3>
                <div style={cardText}>
                  <p>
                    <strong>Problem Solving:</strong> Creative & analytical thinking
                  </p>
                  <p>
                    <strong>Communication:</strong> Clear client interaction
                  </p>
                  <p>
                    <strong>Collaboration:</strong> Team projects & feedback integration
                  </p>
                </div>
              </div>

              <div
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div style={glowCircle}></div>
                <h3 style={cardTitle}>Specializations</h3>
                <div style={cardText}>
                  <p>
                    <strong>Full-Stack Development:</strong> Complete web solutions
                  </p>
                  <p>
                    <strong>Responsive Design:</strong> Mobile-first approach
                  </p>
                  <p>
                    <strong>Creative Branding:</strong> Visual identity solutions
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
