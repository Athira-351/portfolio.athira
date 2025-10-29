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

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation(); // detect current route

  useEffect(() => {
    // For home page, scroll behavior; others always solid
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsTransparent(scrollY < 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // On other pages, always show solid navbar
      setIsTransparent(false);
    }
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0px",
    background: isTransparent
      ? "rgba(0, 0, 0, 0)" // transparent for top of home page
      : "linear-gradient(to right, #ffffffff, #ffffffff, #ffffffff)",
    color: isTransparent ? "#fff" : "#06054eff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: !isHome
      ? "0 3px 8px rgba(0,0,0,0.15)" // shadow for other pages
      : isTransparent
      ? "none" // no shadow when transparent on home
      : "0 2px 8px rgba(0,0,0,0.2)", // shadow when solid on home scroll
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: isTransparent ? "#fff" : "#06054eff",
    textDecoration: "none",
    margin: "0 12px",
    fontSize: "14px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: "22px", fontWeight: "bold", marginLeft: "5rem" }}>
        Athira Anil
      </div>
      <div style={{ fontSize: "22px", fontWeight: "bold", marginRight: "5rem" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About Me
        </Link>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/skills" style={linkStyle}>
          Skills
        </Link>
        <Link to="/" style={linkStyle}>
          Services
        </Link>
        <Link to="/lectures" style={linkStyle}>
          Learning Point
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/" style={linkStyle}>
          Download Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
