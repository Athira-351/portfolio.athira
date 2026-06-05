import { useEffect, useState, useRef } from "react";
import treeImage from "../../assets/tree.png";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillLogos = {
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Reactstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  };

  const categoryColors = {
    Frontend: "#8b5cf6",
    Backend: "#2563eb",
    Database: "#0ea5e9",
    Design: "#ec4899",
  };

  const treeNodes = [
    { name: "HTML", top: "78%", left: "24%", category: "Frontend" },
    { name: "CSS", top: "70%", left: "34%", category: "Frontend" },
    { name: "JavaScript", top: "76%", left: "50%", category: "Frontend" },
    { name: "React.js", top: "62%", left: "60%", category: "Frontend" },
    { name: "Bootstrap", top: "58%", left: "18%", category: "Frontend" },
    { name: "Reactstrap", top: "52%", left: "32%", category: "Frontend" },
    { name: "Python", top: "45%", left: "24%", category: "Backend" },
    { name: "Express.js", top: "40%", left: "44%", category: "Backend" },
    { name: "PHP", top: "42%", left: "64%", category: "Backend" },
    { name: "Laravel", top: "30%", left: "72%", category: "Backend" },
    { name: "MySQL", top: "28%", left: "52%", category: "Database" },
    { name: "MongoDB", top: "18%", left: "60%", category: "Database" },
    { name: "Figma", top: "12%", left: "40%", category: "Design" },
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  const selectedSkill =
    activeSkill || (skills.length ? skills.find((skill) => skill.name === "React.js") : null);

  const sectionStyle = {
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    padding: "100px 40px",
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden",
    position: "relative",
    borderRadius: "60px 60px 0 0",
    boxShadow: "0 -20px 80px rgba(0, 0, 0, 0.15)",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: "all 0.9s cubic-bezier(0.2, 1, 0.3, 1)",
  };

  const containerStyle = { maxWidth: "1200px", margin: "0 auto" };

  const headingStyle = {
    fontSize: "clamp(2.75rem, 3vw, 4rem)",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "18px",
    background: "var(--accent-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const subtitleStyle = {
    fontSize: "1.05rem",
    textAlign: "center",
    color: "var(--text-muted)",
    marginBottom: "70px",
    maxWidth: "760px",
    margin: "0 auto 70px",
    lineHeight: 1.8,
  };

  const treeSectionStyle = {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "40px",
    alignItems: "center",
  };

  const treeWrapperStyle = {
    position: "relative",
    width: "100%",
    paddingTop: "80%",
    background: "var(--surface-strong)",
    borderRadius: "40px",
    overflow: "hidden",
    boxShadow: "0 30px 90px rgba(15, 23, 42, 0.12)",
    border: "1px solid var(--border)",
  };

  const treeImageStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    opacity: 0.95,
    filter: "drop-shadow(0 18px 45px rgba(99, 102, 241, 0.24))",
  };

  const nodeStyle = (position, category) => ({
    position: "absolute",
    top: position.top,
    left: position.left,
    transform: "translate(-50%, -50%)",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    border: `2px solid ${categoryColors[category] || "#8b5cf6"}`,
    background: "var(--surface)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0 0 0 10px rgba(15, 23, 42, 0.08), 0 18px 45px rgba(0, 0, 0, 0.12)`,
    cursor: "pointer",
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
  });

  const detailsStyle = {
    background: "var(--surface)",
    borderRadius: "32px",
    padding: "34px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    border: "1px solid var(--border)",
    boxShadow: "var(--shadow-soft)",
  };

  const skillLabelStyle = {
    fontSize: "16px",
    color: "var(--link)",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontWeight: 700,
  };

  const detailsTitleStyle = {
    fontSize: "2rem",
    fontWeight: "800",
    color: "var(--text-primary)",
    lineHeight: 1.05,
  };

  const detailsTextStyle = {
    fontSize: "1rem",
    color: "var(--text-muted)",
    lineHeight: 1.8,
  };

  const metadataStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
    gap: "16px",
  };

  const metaCardStyle = {
    background: "var(--surface-strong)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    padding: "18px 20px",
    textAlign: "center",
  };

  const metaValueStyle = {
    fontSize: "1.75rem",
    fontWeight: "800",
    color: "var(--text-primary)",
  };

  const metaLabelStyle = {
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    marginTop: "8px",
  };

  const summaryGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "50px",
  };

  const summaryCardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "28px",
    padding: "28px",
    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
  };

  const selected = selectedSkill || { name: "Loading...", description: "Loading skill details...", category: "Frontend", proficiency: "Advanced" };

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Skill Tree</h2>
        <p style={subtitleStyle}>
          Explore a premium skills ecosystem where each expertise node connects to a crafted digital tree. Hover or click a node to surface the detail behind the skill.
        </p>

        <div style={treeSectionStyle}>
          <div style={treeWrapperStyle}>
            <img src={treeImage} alt="Skill tree" style={treeImageStyle} />
            {treeNodes.map((node) => {
              const skill = skills.find((item) => item.name === node.name) || { name: node.name };
              return (
                <button
                  key={node.name}
                  type="button"
                  style={nodeStyle(node, node.category)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onClick={() => setActiveSkill(skill)}
                >
                  <img
                    src={skillLogos[node.name] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                    alt={node.name}
                    style={{ width: 34, height: 34 }}
                  />
                </button>
              );
            })}
          </div>

          <div style={detailsStyle}>
            <div style={skillLabelStyle}>{selected.category || "Skill"}</div>
            <div style={detailsTitleStyle}>{selected.name}</div>
            <p style={detailsTextStyle}>{selected.description || "Select a skill node to reveal more details."}</p>
            <div style={metadataStyle}>
              <div style={metaCardStyle}>
                <div style={metaValueStyle}>{selected.proficiency || "Advanced"}</div>
                <div style={metaLabelStyle}>Proficiency</div>
              </div>
              <div style={metaCardStyle}>
                <div style={metaValueStyle}>{skills.filter((item) => item.category === selected.category).length || "—"}</div>
                <div style={metaLabelStyle}>Nodes in category</div>
              </div>
            </div>
          </div>
        </div>

        <div style={summaryGridStyle}>
          {Object.entries(skillsByCategory).map(([category, items]) => (
            <div key={category} style={summaryCardStyle}>
              <div style={{ fontSize: "16px", color: categoryColors[category] || "#8b5cf6", fontWeight: 700, marginBottom: "14px" }}>
                {category}
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", marginBottom: "14px" }}>{items.length}</div>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                {items.map((item) => item.name).join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

