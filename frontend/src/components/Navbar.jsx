// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#8668aeff",
//     color: "#fff",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     zIndex: 1000,
//   };

//   const linkStyle = {
//     color: "#fff",
//     textDecoration: "none",
//     margin: "0 10px",
//   };

//   return (
//     <nav style={navStyle}>
//       <div style={{ fontWeight: "bold", fontSize: "20px" }}>My Portfolio</div>
//       <div>
//         <Link to="/" style={linkStyle}>Home</Link>
//         {/* <Link to="/admin" style={linkStyle}>Admin</Link> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isTransparent, setIsTransparent] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setIsTransparent(scrollY < 100); // adjust threshold
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "16px 0px",
//     background: isTransparent
//       ? "rgba(0, 0, 0, 0)" // transparent over Hero
//       : "linear-gradient(to right, #ffffffff, #ffffffff, #ffffffff)",
//     color: isTransparent ? "#fff" : "#06054eff",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     zIndex: 1000,
//     // boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//     boxShadow: isTransparent ? "none" : "0 2px 8px rgba(0,0,0,0.2)",

//   };

//   const linkStyle = {
//     color: isTransparent ? "#fff" : "#06054eff",
//     textDecoration: "none",
//     margin: "0 12px",
//     fontSize: "14px",
//     fontWeight: "500",
//   };

//   return (
//     <nav style={navStyle}>
//       <div style={{ fontSize: "22px", fontWeight: "bold", marginLeft: "5rem" }}>Athira Anil</div>
//       <div style={{ fontSize: "22px", fontWeight: "bold", marginRight: "5rem" }}>
//         <Link to="/" style={linkStyle}>Home</Link>
//         <Link to="/about" style={linkStyle}>About Me</Link>
//         <Link to="/projects" style={linkStyle}>Projects</Link>
//         <Link to="/skills" style={linkStyle}>Skills</Link>
//         <Link to="/" style={linkStyle}>Services</Link>
//         <Link to="/lectures" style={linkStyle}>Learning Point</Link>
//         <Link to="/contact" style={linkStyle}>Contact</Link>
//         <Link to="/" style={linkStyle}>Download Resume</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsTransparent(scrollY < 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsTransparent(false);
    }
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: isTransparent ? "rgba(0, 0, 0, 0)" : "var(--nav-bg)",
    backdropFilter: !isTransparent ? "blur(20px)" : "none",
    color: "var(--nav-text)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: !isHome
      ? "0 4px 20px rgba(102, 126, 234, 0.15)"
      : isTransparent
      ? "none"
      : "0 4px 20px rgba(102, 126, 234, 0.15)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-0.5px",
    cursor: "pointer",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "var(--nav-text)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    padding: "8px 12px",
    borderRadius: "6px",
    position: "relative",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#667eea",
  };

  const themeToggleStyle = {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid var(--border)",
    background: "var(--surface)",
    color: "var(--text-primary)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const isActive = (path) => location.pathname === path;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
  };

  const dropdownButtonStyle = {
    ...linkStyle,
    display: "flex",
    alignItems: "center",
    gap: "4px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  };

  const dropdownContentStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "var(--surface)",
    minWidth: "220px",
    boxShadow: "0 12px 24px rgba(102, 126, 234, 0.3)",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    marginTop: "0px",
    display: showLearnDropdown ? "block" : "none",
    zIndex: 2000,
    border: "1px solid var(--border)",
    overflow: "hidden",
  };

  const dropdownItemStyle = {
    color: "var(--text-primary)",
    padding: "14px 20px",
    textDecoration: "none",
    display: "block",
    width: "100%",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "6px",
    margin: "0",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        ATHIRA
      </Link>
      <div style={navLinksStyle}>
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/skills", label: "Skills" },
          { path: "/contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={isActive(item.path) ? activeLinkStyle : linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#667eea";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--nav-text)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* Learn Dropdown */}
        <div
          style={dropdownStyle}
          onMouseEnter={() => setShowLearnDropdown(true)}
          onMouseLeave={() => setShowLearnDropdown(false)}
        >
          <button
            style={dropdownButtonStyle}
            onClick={() => setShowLearnDropdown(!showLearnDropdown)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#667eea";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--nav-text)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Learn 
            <span style={{ fontSize: "12px", marginLeft: "4px", transition: "transform 0.3s ease", transform: showLearnDropdown ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
          </button>
          <div style={dropdownContentStyle}>
            <Link
              to="/gate"
              style={dropdownItemStyle}
              onClick={() => setShowLearnDropdown(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(102, 126, 234, 0.2)";
                e.currentTarget.style.color = "#667eea";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              GATE CS & IT
            </Link>
          </div>
        </div>

        <button
          style={themeToggleStyle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(102, 126, 234, 0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>

        <Link
          to="/"
          style={{
            ...linkStyle,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
