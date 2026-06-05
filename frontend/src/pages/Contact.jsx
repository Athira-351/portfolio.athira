import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LinkedIn from "../assets/linkedin.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitStatus(""), 3000);
  };

  const pageStyle = {
    background: "linear-gradient(135deg, #010008ff 0%, #302b63 25%, #24243e 75%, #010008ff 100%)",
    color: "#fff",
    minHeight: "100vh",
    paddingTop: "80px",
    fontFamily: "Poppins, sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const decorativeElementsStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  };

  const floatingCircle1 = {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)",
    borderRadius: "50%",
    top: "10%",
    left: "5%",
    filter: "blur(40px)",
    animation: "float 6s ease-in-out infinite",
  };

  const floatingCircle2 = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)",
    borderRadius: "50%",
    bottom: "15%",
    right: "10%",
    filter: "blur(40px)",
    animation: "float 8s ease-in-out infinite reverse",
  };

  const sectionStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 40px",
    position: "relative",
    zIndex: 1,
  };

  const titleStyle = {
    fontSize: "80px",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: "20px",
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-2px",
    position: "relative",
    animation: "fadeInDown 0.8s ease-out",
  };

  const subtitleStyle = {
    fontSize: "20px",
    textAlign: "center",
    color: "#b0b9d4",
    marginBottom: "80px",
    maxWidth: "800px",
    margin: "0 auto 80px",
    lineHeight: "1.6",
    animation: "fadeInUp 0.8s ease-out 0.2s backwards",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    marginBottom: "100px",
    alignItems: "start",
  };

  const formContainerStyle = {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
    border: "2px solid rgba(139, 92, 246, 0.5)",
    borderRadius: "28px",
    padding: "60px",
    boxShadow: "0 20px 60px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    position: "relative",
    overflow: "hidden",
    animation: "slideInLeft 0.8s ease-out 0.2s backwards",
  };

  const formTitleStyle = {
    fontSize: "42px",
    fontWeight: "900",
    marginBottom: "12px",
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  };

  const formSubtitleStyle = {
    fontSize: "16px",
    color: "#a7adc8",
    marginBottom: "40px",
    fontWeight: "500",
  };

  const formGroupStyle = {
    marginBottom: "28px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#b0b9d4",
    marginBottom: "10px",
    letterSpacing: "0.5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "14px",
    border: "2px solid rgba(139, 92, 246, 0.4)",
    background: "rgba(255, 255, 255, 0.05)",
    fontSize: "16px",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxSizing: "border-box",
    backdropFilter: "blur(5px)",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "none",
    minHeight: "180px",
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "16px 36px",
    borderRadius: "14px",
    border: "2px solid transparent",
    fontSize: "16px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 15px 35px rgba(236, 72, 153, 0.35)",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    position: "relative",
    overflow: "hidden",
  };

  const infoContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  };

  const infoCardStyle = {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)",
    border: "2px solid rgba(139, 92, 246, 0.5)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 15px 40px rgba(236, 72, 153, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    cursor: "pointer",
    backdrop: "blur(20px)",
    position: "relative",
    overflow: "hidden",
    animation: "slideInRight 0.8s ease-out calc(0.2s + var(--index) * 0.1s) backwards",
  };

  const infCardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
    e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.8)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
    e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)";
  };

  const infoCardHoverLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.5)";
    e.currentTarget.style.boxShadow = "0 15px 40px rgba(236, 72, 153, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
    e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)";
  };

  const infoIconStyle = {
    fontSize: "48px",
    marginBottom: "20px",
    display: "block",
    animation: "bounce 2s ease-in-out infinite",
  };

  const infoLabelStyle = {
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#8b9dc3",
    marginBottom: "10px",
    letterSpacing: "1px",
  };

  const infoValueStyle = {
    fontSize: "24px",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "14px",
    letterSpacing: "-0.5px",
  };

  const infoLinkStyle = {
    color: "#ec4899",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "700",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  };

  const socialSectionStyle = {
    textAlign: "center",
    paddingTop: "100px",
    borderTop: "2px solid rgba(139, 92, 246, 0.3)",
    marginTop: "100px",
    animation: "fadeInUp 0.8s ease-out 0.4s backwards",
  };

  const socialTitleStyle = {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "60px",
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-1.5px",
  };

  const socialGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "28px",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const socialButtonStyle = {
    padding: "40px 28px",
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)",
    border: "2px solid rgba(139, 92, 246, 0.5)",
    borderRadius: "20px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "36px",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(20px)",
  };

  const socialButtonLabel = {
    fontSize: "12px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#a7adc8",
    transition: "all 0.3s ease",
  };

  return (
    <div style={pageStyle}>
    <Navbar />
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        input:focus, textarea:focus {
          outline: none;
        }

        button:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 0.6s;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>

      <div style={decorativeElementsStyle}>
        <div style={floatingCircle1}></div>
        <div style={floatingCircle2}></div>
      </div>

      <div style={sectionStyle}>
        <h1 style={titleStyle}>Let's Connect</h1>
        <p style={subtitleStyle}>
          Have a project in mind or want to discuss opportunities? I'd love to hear from you. Reach out anytime and let's create something amazing together!
        </p>

        <div style={gridStyle}>
          {/* Contact Form */}
          <div style={formContainerStyle}>
            <h2 style={formTitleStyle}>Send a Message</h2>
            <p style={formSubtitleStyle}>I'll get back to you as soon as possible</p>

            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  style={inputStyle}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={(e) => {
                    setFocusedField("name");
                    e.target.style.borderColor = "rgba(236, 72, 153, 0.9)";
                    e.target.style.background = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "0 0 25px rgba(236, 72, 153, 0.3), inset 0 0 10px rgba(255,255,255,0.05)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onBlur={(e) => {
                    setFocusedField(null);
                    e.target.style.borderColor = "rgba(139, 92, 246, 0.4)";
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.boxShadow = "none";
                    e.target.style.transform = "translateY(0)";
                  }}
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={(e) => {
                    setFocusedField("email");
                    e.target.style.borderColor = "rgba(236, 72, 153, 0.9)";
                    e.target.style.background = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "0 0 25px rgba(236, 72, 153, 0.3), inset 0 0 10px rgba(255,255,255,0.05)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onBlur={(e) => {
                    setFocusedField(null);
                    e.target.style.borderColor = "rgba(139, 92, 246, 0.4)";
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.boxShadow = "none";
                    e.target.style.transform = "translateY(0)";
                  }}
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  style={inputStyle}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={(e) => {
                    setFocusedField("subject");
                    e.target.style.borderColor = "rgba(236, 72, 153, 0.9)";
                    e.target.style.background = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "0 0 25px rgba(236, 72, 153, 0.3), inset 0 0 10px rgba(255,255,255,0.05)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onBlur={(e) => {
                    setFocusedField(null);
                    e.target.style.borderColor = "rgba(139, 92, 246, 0.4)";
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.boxShadow = "none";
                    e.target.style.transform = "translateY(0)";
                  }}
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  style={textareaStyle}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={(e) => {
                    setFocusedField("message");
                    e.target.style.borderColor = "rgba(236, 72, 153, 0.9)";
                    e.target.style.background = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "0 0 25px rgba(236, 72, 153, 0.3), inset 0 0 10px rgba(255,255,255,0.05)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onBlur={(e) => {
                    setFocusedField(null);
                    e.target.style.borderColor = "rgba(139, 92, 246, 0.4)";
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.boxShadow = "none";
                    e.target.style.transform = "translateY(0)";
                  }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                style={submitButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-6px)";
                  e.target.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.45)";
                  e.target.style.letterSpacing = "1.5px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 15px 35px rgba(236, 72, 153, 0.35)";
                  e.target.style.letterSpacing = "0.8px";
                }}
              >
                {submitStatus === "success" ? "✔ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={infoContainerStyle}>
            <div
              style={{ ...infoCardStyle, "--index": 0 }}
              onMouseEnter={infCardHover}
              onMouseLeave={infoCardHoverLeave}
            >
              <span style={infoIconStyle}>📱</span>
              <p style={infoLabelStyle}>Phone</p>
              <p style={infoValueStyle}>+91 9744590525</p>
              <a
                href="tel:+919744590525"
                style={infoLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                onMouseLeave={(e) => (e.target.style.color = "#ec4899")}
              >
                Call Now ↗
              </a>
            </div>

            <div
              style={{ ...infoCardStyle, "--index": 1 }}
              onMouseEnter={infCardHover}
              onMouseLeave={infoCardHoverLeave}
            >
              <span style={infoIconStyle}>✉️</span>
              <p style={infoLabelStyle}>Email</p>
              <p style={infoValueStyle}>athiraanil351@gmail.com</p>
              <a
                href="mailto:athiraanil351@gmail.com"
                style={infoLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                onMouseLeave={(e) => (e.target.style.color = "#ec4899")}
              >
                Send Email ↗
              </a>
            </div>

            <div
              style={{ ...infoCardStyle, "--index": 2 }}
              onMouseEnter={infCardHover}
              onMouseLeave={infoCardHoverLeave}
            >
              <span style={infoIconStyle}>💬</span>
              <p style={infoLabelStyle}>WhatsApp</p>
              <p style={infoValueStyle}>+91 9744590525</p>
              <a
                href="https://wa.me/919744590525?text=Hi%20Athira"
                target="_blank"
                rel="noopener noreferrer"
                style={infoLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                onMouseLeave={(e) => (e.target.style.color = "#ec4899")}
              >
                Message ↗
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div style={socialSectionStyle}>
          <h2 style={socialTitleStyle}>Connect With Me</h2>
          <div style={socialGridStyle}>
            <a
              href="https://linkedin.com/in/athira-anil-0b547a260"
              target="_blank"
              rel="noopener noreferrer"
              style={socialButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)";
                e.currentTarget.style.transform = "translateY(-12px) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.4)";
                e.currentTarget.querySelector("span:last-child").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector("span:last-child").style.color = "#a7adc8";
              }}
            >
              <span>{LinkedIn}</span>
              <span style={socialButtonLabel}>LinkedIn</span>
            </a>

            <a
              href="https://github.com/athira-351"
              target="_blank"
              rel="noopener noreferrer"
              style={socialButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)";
                e.currentTarget.style.transform = "translateY(-12px) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.4)";
                e.currentTarget.querySelector("span:last-child").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector("span:last-child").style.color = "#a7adc8";
              }}
            >
              <span>💻</span>
              <span style={socialButtonLabel}>GitHub</span>
            </a>

            <a
              href="mailto:athiraanil351@gmail.com"
              style={socialButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)";
                e.currentTarget.style.transform = "translateY(-12px) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.4)";
                e.currentTarget.querySelector("span:last-child").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector("span:last-child").style.color = "#a7adc8";
              }}
            >
              <span>📧</span>
              <span style={socialButtonLabel}>Email</span>
            </a>

            <a
              href="tel:+919744590525"
              style={socialButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)";
                e.currentTarget.style.transform = "translateY(-12px) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.4)";
                e.currentTarget.querySelector("span:last-child").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector("span:last-child").style.color = "#a7adc8";
              }}
            >
              <span>☎️</span>
              <span style={socialButtonLabel}>Phone</span>
            </a>

            <a
              href="https://wa.me/919744590525?text=Hi%20Athira"
              target="_blank"
              rel="noopener noreferrer"
              style={socialButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)";
                e.currentTarget.style.transform = "translateY(-12px) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(236, 72, 153, 0.4)";
                e.currentTarget.querySelector("span:last-child").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector("span:last-child").style.color = "#a7adc8";
              }}
            >
              <span>💬</span>
              <span style={socialButtonLabel}>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;