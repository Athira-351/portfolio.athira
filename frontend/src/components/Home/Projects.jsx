// import { useEffect, useState } from "react";
// import axios from "axios";

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/projects").then((res) => setProjects(res.data));
//   }, []);

//   return (
//     <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
//         My <span className="text-pink-600">Projects</span>
//       </h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-pink-500/20 hover:scale-105 transition transform"
//           >
//             <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
//               {p.title}
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>
//             <a
//               href={p.link}
//               target="_blank"
//               className="inline-block px-5 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-indigo-600 font-semibold hover:shadow-lg"
//             >
//               Visit →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Projects;
//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectImage from "../../assets/projects.png";
import thumbnailbgImg from "../../assets/polysoftdev.png";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);
  const navigate = useNavigate();

  const MAX_DESCRIPTION_LENGTH = 150;

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength).trim() + "...";
    }
    return text;
  };

  useEffect(() => {
    fetch("/data/projects.json").then((res) => res.json()).then((data) => {
      setProjects(data);
      if (data.length > 0) {
        setFeaturedProject(data[0]); // Set first project as featured
      }
    });
  }, []);

  const sectionStyle = {
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    padding: "60px 40px",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap", // responsive fallback
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
    background: "var(--accent-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
    background: "var(--surface)",
    backdropFilter: "blur(10px)",
    border: "1px solid var(--border)",
    borderRadius: "16px",
    padding: "20px",
    width: "95%",
    height: "35rem",
    maxWidth: "850px",
    boxShadow: "var(--shadow-soft)",
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
    color: "var(--text-primary)",
    textAlign: "center",
  };

  const featuredDescriptionStyle = {
    fontSize: "16px",
    color: "var(--text-muted)",
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
    background: "linear-gradient(to right, #ec4899, #8b5cf6)",
    padding: "12px 25px",
    borderRadius: "10px",
    display: "inline-block",
    boxShadow: "0 6px 18px rgba(236, 72, 153, 0.4)",
    transition: "transform 0.2s ease, background 0.3s ease",
  };

  const carouselWrapperStyle = {
    display: "flex",
    overflowX: "auto",
    gap: "20px",
    padding: "20px 0",
    maxWidth: "100%",
    scrollbarWidth: "thin",
    scrollbarColor: "#ec4899 #333",
    WebkitOverflowScrolling: "touch",
  };

  const webkitScrollbarStyle = `
    .carousel-wrapper::-webkit-scrollbar {
      height: 8px;
    }
    .carousel-wrapper::-webkit-scrollbar-track {
      background: rgba(139, 92, 246, 0.1);
      border-radius: 10px;
    }
    .carousel-wrapper::-webkit-scrollbar-thumb {
      background: linear-gradient(to right, #ec4899, #8b5cf6);
      border-radius: 10px;
      border: 2px solid rgba(236, 72, 153, 0.2);
    }
  `;

  const thumbnailCardStyle = {
    flexShrink: 0,
    background: "var(--surface)",
    backdropFilter: "blur(5px)",
    borderRadius: "15px",
    padding: "15px",
    width: "180px",
    boxShadow: "var(--shadow-soft)",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    border: "1px solid var(--border)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const thumbnailImageStyle = {
    width: "100%",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  const thumbnailTitleStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "var(--text-primary)",
    textAlign: "center",
    marginBottom: "5px",
  };

  const thumbnailDescriptionStyle = {
    fontSize: "11px",
    color: "var(--text-muted)",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <section style={{ ...sectionStyle, position: "relative" }}>
      <style>{webkitScrollbarStyle}</style>
     {/* Decorative rectangle with image aligned to the left */}
<div
  style={{
    position: "absolute",
    top: "35%",
    left: "31.42%",
    transform: "translate(-50%, -50%)",
    width: "7.77rem",
    height: "35rem",
    background: "var(--surface-strong)",
    borderRadius: "18px 0px 0px 18px", // Rectangle corners stay sharp
    boxShadow: "var(--shadow-soft)",
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
              {truncateDescription(featuredProject.description, MAX_DESCRIPTION_LENGTH)}
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              {featuredProject.description.length > MAX_DESCRIPTION_LENGTH && (
                <button
                  onClick={() => navigate(`/projects/${featuredProject.id}`)}
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#ffffff",
                    textDecoration: "none",
                    background: "var(--btn-bg)",
                    padding: "12px 25px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease, background 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Read More
                </button>
              )}
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
          </div>
        )}

        <div className="carousel-wrapper" style={carouselWrapperStyle}>
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                ...thumbnailCardStyle,
                borderColor:
                  featuredProject && featuredProject.id === p.id
                    ? "var(--link)"
                    : "var(--border)",
                boxShadow:
                  featuredProject && featuredProject.id === p.id
                    ? "0 8px 20px rgba(139, 92, 246, 0.4)"
                    : "0 5px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  featuredProject && featuredProject.id === p.id
                    ? "0 8px 20px rgba(139, 92, 246, 0.4)"
                    : "0 5px 15px rgba(0,0,0,0.2)";
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
              color: "var(--text-primary)",
              background: "var(--surface)",
              border: "1px dashed var(--border)",
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
  );
}

export default Projects;
