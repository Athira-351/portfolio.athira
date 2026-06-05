import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [expandedSkillIds, setExpandedSkillIds] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json").then((res) => res.json()).then((data) => setSkills(data));
  }, []);

  const toggleExpand = (id) => {
    setExpandedSkillIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const sectionStyle = {
    backgroundColor: "#0f0c29",
    color: "#ffffff",
    padding: "120px 20px",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "linear-gradient(135deg, #0f0c29 0%, #1a1633 50%, #302b63 100%)",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "80px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-1px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "28px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "rgba(102, 126, 234, 0.08)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(102, 126, 234, 0.2)",
    color: "#ffffff",
    padding: "32px 24px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    textAlign: "center",
  };

  const logoStyle = {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginBottom: "20px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "8px",
    display: "flex",
    margin: "0 auto 20px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffffff",
    letterSpacing: "-0.3px",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#d0d0d0",
    lineHeight: "1.6",
    marginBottom: "16px",
    minHeight: "50px",
  };

  const buttonStyle = {
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    transition: "all 0.3s ease",
  };

  return (
  <>
    <Navbar style={{color: "#000000"}} />
    <div style={sectionStyle}>
      <h1 style={headingStyle}>My Skills</h1>
      <div style={gridStyle}>
        {skills.map((skill) => {
          const isExpanded = expandedSkillIds.includes(skill.id);
          const description = skill.description || "";
          const shortDescription =
            description.length > 100 && !isExpanded
              ? description.slice(0, 100) + "..."
              : description;

          return (
            <div
              key={skill.id}
              style={{ textDecoration: "none" }}
            >
              <div
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.3)";
                  e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.5)";
                  e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                  e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.2)";
                  e.currentTarget.style.background = "rgba(102, 126, 234, 0.08)";
                }}
              >
                <img
                  src={
                    skill.icon && skill.icon.startsWith("http")
                      ? skill.icon
                      : skill.icon
                      ? `http://localhost:5000${skill.icon}`
                      : "https://via.placeholder.com/60?text=Skill"
                  }
                  alt={skill.name}
                  style={logoStyle}
                />
                <h2 style={titleStyle}>{skill.name}</h2>
                <p style={{ ...descriptionStyle, minHeight: "50px" }}>
                  {shortDescription}
                </p>
                {skill.proficiency && (
                  <p style={{ fontSize: "13px", color: "#a0aec0", marginBottom: "10px" }}>
                    <strong>Proficiency:</strong> {skill.proficiency}
                  </p>
                )}
                {description.length > 100 && (
                  <button
                    style={{ ...buttonStyle, background: "linear-gradient(to right, #6366f1, #8b5cf6)" }}
                    onClick={() => toggleExpand(skill.id)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Skills;