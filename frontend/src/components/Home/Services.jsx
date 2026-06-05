import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const sectionStyle = {
    minHeight: "100vh",
    padding: "100px 40px",
    background: "var(--bg-secondary)",
    fontFamily: "Poppins, sans-serif",
    color: "var(--text-primary)",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    background: "var(--accent-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const subheadingStyle = {
    fontSize: "18px",
    color: "var(--text-muted)",
    textAlign: "center",
    marginBottom: "80px",
    maxWidth: "600px",
    margin: "0 auto 80px",
    lineHeight: "1.6",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    marginBottom: "60px",
  };

  const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "18px",
    padding: "40px 30px",
    boxShadow: "var(--shadow-soft)",
    transition: "all 0.4s ease",
    position: "relative",
    overflow: "hidden",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-15px)";
    e.currentTarget.style.boxShadow = "0 20px 50px rgba(102, 126, 234, 0.25)";
    e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.1)";
  };

  const iconStyle = {
    fontSize: "48px",
    marginBottom: "20px",
    display: "inline-block",
  };

  const cardTitleStyle = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "var(--text-primary)",
  };

  const cardTextStyle = {
    fontSize: "16px",
    color: "var(--text-muted)",
    lineHeight: "1.7",
    marginBottom: "20px",
  };

  const ctaButtonStyle = {
    display: "inline-block",
    padding: "10px 24px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  };

  const servicesData = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Building creative, responsive, and high-performance websites using React.js, Express.js, and modern frameworks. Fully optimized for all devices.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Creating beautiful, user-centric designs with Figma. Custom layouts, color schemes, and interactive prototypes that bring ideas to life.",
    },
    {
      icon: "🏷️",
      title: "Logo Design",
      description:
        "Designing unique and professional logos that represent your brand essence. Creative visuals from concept to final artwork.",
    },
    {
      icon: "📄",
      title: "Poster Design",
      description:
        "Creating eye-catching posters for events, promotions, and announcements. Compelling layouts with stunning visuals that grab attention.",
    },
    {
      icon: "📢",
      title: "Static Ads Design",
      description:
        "Designing engaging advertisements for social media, banners, and web platforms. Optimized visuals with clear calls-to-action.",
    },
    {
      icon: "✨",
      title: "Brand Identity",
      description:
        "Developing complete brand identities with logos, color palettes, typography, and guidelines. Building cohesive visual language.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Services & Solutions</h2>
        <p style={subheadingStyle}>
          I offer comprehensive design and development services to bring your ideas to life.
          From creative websites to stunning visual designs, I deliver excellence in every project.
        </p>

        <div style={gridStyle}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "100px",
                  height: "100px",
                  background: "radial-gradient(circle, rgba(99, 102, 241, 0.14), rgba(255,255,255,0))",
                  borderRadius: "50%",
                  zIndex: "0",
                }}
              ></div>

              <div style={{ position: "relative", zIndex: "1" }}>
                <div style={iconStyle}>{service.icon}</div>
                <h3 style={cardTitleStyle}>{service.title}</h3>
                <p style={cardTextStyle}>{service.description}</p>
                <Link to="/about?tab=services" style={ctaButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 40px",
            background: "var(--btn-bg)",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Ready to Start Your Project?
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "30px",
              maxWidth: "500px",
              margin: "0 auto 30px",
              lineHeight: "1.6",
            }}
          >
            Let's collaborate and create something amazing together. I'm ready to help bring
            your vision to life with creative design and cutting-edge development.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              padding: "15px 40px",
              background: "var(--surface)",
              color: "var(--text-primary)",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
