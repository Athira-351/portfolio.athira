import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [expandedSkillIds, setExpandedSkillIds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/skills").then((res) => setSkills(res.data));
  }, []);

  const toggleExpand = (id) => {
    setExpandedSkillIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const sectionStyle = {
    backgroundColor: "#ffffff",
    color: "#1f2937",
    padding: "80px 20px",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "60px",
    background: "linear-gradient(to right, #6366f1, #06054eff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(254px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    color: "#ffffff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    border: "1px solid #374151",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    textAlign: "center",
  };

  const logoStyle = {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    marginBottom: "16px",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
    padding: "6px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#ffffff",
  };

  const descriptionStyle = {
    fontSize: "15px",
    color: "#d1d5db",
    lineHeight: "1.6",
    marginBottom: "10px",
  };

  const buttonStyle = {
    // backgroundColor: "#6366f1",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
  <>
    <Navbar style={{color: "#000000"}} />
    <div style={sectionStyle}>
      <h1 style={headingStyle}>My Skills</h1>
      <div style={gridStyle}>
        {skills.map((skill) => {
          const isExpanded = expandedSkillIds.includes(skill.id);
          const shortDescription =
            skill.description.length > 100 && !isExpanded
              ? skill.description.slice(0, 50) + "..."
              : skill.description;

          return (
            <Link
              to={skill.source_link}
              key={skill.id}
              style={{ textDecoration: "none" }}
            >
              <div
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={
                    skill.logo.startsWith("http")
                      ? skill.logo
                      : `http://localhost:5000${skill.logo}`
                  }
                  alt={skill.name}
                  style={logoStyle}
                />
                <h2 style={titleStyle}>{skill.name}</h2>
                <p style={descriptionStyle}>
  {shortDescription}
  {skill.description.length > 100 && (
    <Link
      style={{ ...buttonStyle, marginLeft: "8px" }}
      onClick={(e) => {
        e.preventDefault(); 
        toggleExpand(skill.id);
      }}
    >
      {isExpanded ? "Show Less" : "Read More"}
    </Link>
  )}
</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Skills;