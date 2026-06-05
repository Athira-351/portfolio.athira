
import { useEffect, useState } from "react";
import projectImage from "../assets/projects.png"
import thumbnailbgImg from "../assets/polysoftdev.png"
import Navbar from "../components/Navbar";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json").then((res) => res.json()).then((data) => {
      setProjects(data);
      if (data.length > 0) {
        setFeaturedProject(data[0]); // Set first project as featured
      }
    });
  }, []);

  const sectionStyle = {
    background: "linear-gradient(to right, #6366f1, #06054eff)",
    color: "#ffffff",
    padding: "80px 40px",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap", // responsive fallback



    // padding: "80px 40px",
    // minHeight: "100vh",
    // fontFamily: "Segoe UI, sans-serif",
    // display: "flex",
    // alignItems: "flex-start",
    // justifyContent: "center",
    // gap: "60px",
    // flexWrap: "wrap",
    // position: "relative",
  };
  const headingContainerStyle = {
    flex: "0 0 220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "3rem",
  };

  const headingStyle = {
    fontSize: "42px",
    fontWeight: "900",
    letterSpacing: "1px",
    textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
    margin: 0,
  };
  const projectSectionImageStyle = {
    width: "25rem",
    height: "25rem",
    objectFit: "contain",
  };
  const contentContainerStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "300px",
  };

  const featuredProjectContainerStyle = {
    background: "#ffffff",
    backdropFilter: "blur(8px)",
    borderRadius: "16px",
    padding: "20px",
    width: "95%",
    height: "35rem",
    maxWidth: "850px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.15)",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 3, // 👈 ensures it sits above the decorative rectangle
  position: "relative", 
  };

  const featuredImageStyle = {
    width: "100%",
    maxWidth: "90rem",
    height: "400px",
    borderRadius: "20px",
    objectFit: "cover",
    marginBottom: "1rem",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  };

  const featuredTitleStyle = {
    fontSize: "2rem",
    fontWeight: "800",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#333",
    textAlign: "center",
  };

  const featuredDescriptionStyle = {
    fontSize: "16px",
    color: "#444",
    marginBottom: "5px",
    lineHeight: "1.6",
    textAlign: "center",
    maxWidth: "750px",
  };

  const featuredLinkStyle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
    textDecoration: "none",
    background: "linear-gradient(to right, #8b5cf6, #d946ef)",
    padding: "12px 25px",
    borderRadius: "10px",
    display: "inline-block",
    boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
    transition: "transform 0.2s ease, background 0.3s ease",
  };

  const carouselWrapperStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "28px",
    padding: "20px 0",
    maxWidth: "100%",
    width: "100%",
  };

  const webkitScrollbarStyle = ``;

  const thumbnailCardStyle = {
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "24px",
    width: "100%",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    transition:
      "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease",
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    position: "relative",
    overflow: "hidden",
  };

  const thumbnailImageStyle = {
    width: "100%",
    height: "180px",
    borderRadius: "14px",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  };

  const thumbnailTitleStyle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "left",
    marginBottom: "8px",
  };

  const thumbnailDescriptionStyle = {
    fontSize: "13px",
    color: "#e0e0e0",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    lineHeight: "1.5",
  };

  const projectCardButtonStyle = {
    marginTop: "auto",
    padding: "10px 20px",
    fontSize: "13px",
    fontWeight: "700",
    color: "#ffffff",
    textDecoration: "none",
    background: "linear-gradient(to right, #8b5cf6, #d946ef)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  return (
    <div>
    <Navbar style={{color: "#000000"}} />
    <section style={{ ...sectionStyle, position: "relative" }}>
      <style>{`
        ${webkitScrollbarStyle}
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .thumbnail-card {
          animation: fadeIn 0.6s ease-out;
        }

        .thumbnail-card:hover {
          transform: translateY(-12px) !important;
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.3) !important;
          border-color: rgba(236, 72, 153, 0.6) !important;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%) !important;
        }

        .thumbnail-card:hover img {
          transform: scale(1.05);
        }

        .thumbnail-card button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4);
        }
      `}</style>
     {/* Decorative rectangle with image aligned to the left */}
<div
  style={{
    position: "absolute",
    top: "35%",
    left: "31.42%",
    transform: "translate(-50%, -50%)",
    width: "7.77rem",
    height: "35rem",
    background: "#ffffff",
    borderRadius: "18px 0px 0px 18px", // Rectangle corners stay sharp
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
    zIndex: 2,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }}
>
  <img
    src={thumbnailbgImg}
    alt="Website Preview"
    style={{
      width: "100%",
      height: "90%",
      objectFit: "cover",
      objectPosition: "left",
      borderTopLeftRadius: "1rem",
      borderBottomLeftRadius: "1rem",
      marginLeft: "1.8rem",
    }}
  />
</div>
      {/* Left Heading */}
      <div style={headingContainerStyle}>
        <h1 style={headingStyle}>My Portfolio</h1>
        <img
          src={projectImage}
          alt="Project Thumbnail"
          style={projectSectionImageStyle}
        />
      </div>

      {/* Right Content */}
      <div style={contentContainerStyle}>
        {featuredProject && (
          <div style={featuredProjectContainerStyle}>
            <img
              src={featuredProject.thumbnail_image || "/fallback.png"}
              alt={featuredProject.title}
              style={featuredImageStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            <h2 style={featuredTitleStyle}>{featuredProject.title}</h2>
            <p style={featuredDescriptionStyle}>
              {featuredProject.description}
            </p>
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              style={featuredLinkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Visit Project →
            </a>
          </div>
        )}

        <div className="carousel-wrapper" style={carouselWrapperStyle}>
          {projects.map((p) => (
            <div
              key={p.id}
              className="thumbnail-card"
              style={{
                ...thumbnailCardStyle,
                borderColor:
                  featuredProject && featuredProject.id === p.id
                    ? "#8b5cf6"
                    : "rgba(255,255,255,0.15)",
                boxShadow:
                  featuredProject && featuredProject.id === p.id
                    ? "0 8px 20px rgba(139, 92, 246, 0.4)"
                    : "0 8px 24px rgba(0,0,0,0.3)",
              }}
              onClick={() => setFeaturedProject(p)}
            >
              <img
                src={p.thumbnail_image || "/fallback.png"}
                alt={p.title}
                style={thumbnailImageStyle}
              />
              <h3 style={thumbnailTitleStyle}>{p.title}</h3>
              <p style={thumbnailDescriptionStyle}>{p.description}</p>
            </div>
          ))}

          <div
            style={{
              ...thumbnailCardStyle,
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "700",
              color: "#ffffff",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px dashed rgba(255,255,255,0.3)",
            }}
            onClick={() =>
              alert("Navigate to all projects page or open a modal.")
            }
          >
            See all projects →
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Projects;