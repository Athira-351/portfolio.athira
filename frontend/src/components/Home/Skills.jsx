import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/skills")
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  const sectionStyle = {
    background: "linear-gradient(to right, rgb(1,0,8), rgb(48,43,99), rgb(36,36,62))",
    color: "#fff",
    padding: "100px 40px",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden",
    position: "relative",
  };

  const headingStyle = {
    fontSize: "44px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "70px",
  };

  const treeWrapper = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "80px",
    flexWrap: "wrap",
    position: "relative",
  };

  const trunkArea = {
    flex: "0.8",
    minWidth: "280px",
    height: "600px",
    position: "relative",
  };

  const skillsArea = {
    flex: "1.2",
    minWidth: "400px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "15px 30px",
  };

  const nodeStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  };

  const skillBoxStyle = {
    border: "1px solid white",
    color: "#fff",
    borderRadius: "10px",
    padding: "12px 25px",
    fontSize: "18px",
    fontWeight: "600",
    display: "inline-block",
    textTransform: "capitalize",
    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  };

  // 🍃 New leaf-like spread pattern (balanced canopy)
const positions = [
    // top cluster (like upper leaves)
    { top: "5%", left: "50%" },
    { top: "6%", left: "35%" },
    { top: "10%", left: "65%" },
    { top: "18%", left: "25%" },
    { top: "20%", left: "75%" },
    // mid section (middle branches)
    { top: "30%", left: "20%" },
    { top: "30%", left: "80%" },
    { top: "32%", left: "40%" },
    { top: "38%", left: "60%" },
    // lower mid cluster
    { top: "40%", left: "30%" },
    { top: "12%", left: "55%" },
    { top: "15%", left: "45%" },
    { top: "29%", left: "60%" },
    { top: "39%", left: "50%" },
    { top: "40%", left: "72%" },
    { top: "40%", left: "17%" },
    // base section (bottom leaves)
    { top: "22%", left: "35%" },
    { top: "20%", left: "65%" },
    { top: "25%", left: "50%" },
  ];

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>My Skills</h1>

      <div style={treeWrapper}>
        {/* 🌳 Tree trunk with nodes */}
        <div style={trunkArea}>
          {/* trunk line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0%",
              bottom: "0%",
              width: "6px",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              transform: "translateX(-50%)",
              borderRadius: "10px",
            }}
          />

          {/* nodes */}
          {skills.map((skill, index) => {
            const pos = positions[index % positions.length];
            return (
              <div
                key={skill.id}
                style={{
                  ...nodeStyle,
                  top: pos.top,
                  left: pos.left,
                  transform: "translate(-50%, 0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(-50%, 0) scale(1.2)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(99,102,241,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(-50%, 0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.3)";
                }}
              >
                <img
                  src={
                    skill.logo.startsWith("http")
                      ? skill.logo
                      : `http://localhost:5000${skill.logo}`
                  }
                  alt={skill.name}
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
            );
          })}
        </div>

        {/* 📦 Skill boxes */}
        <div style={skillsArea}>
          {skills.map((skill) => (
            <Link
              key={skill.id}
              to={skill.source_link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  ...skillBoxStyle,
                  minWidth: `${skill.name.length * 13 + 60}px`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(99,102,241,0.2)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.boxShadow =
                    "0 4px 14px rgba(0,0,0,0.3)";
                }}
              >
                {skill.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
