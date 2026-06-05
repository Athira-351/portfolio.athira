import React, { useState } from "react";
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";
import Email from "../../assets/email.svg";
import WhatsApp from "../../assets/whatsapp.svg";
// import Phone from "../../assets/phone-calling.svg
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const sectionStyle = {
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    padding: "120px 40px",
    fontFamily: "Poppins, sans-serif",
    minHeight: "100vh",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "56px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    background: "var(--accent-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-1px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    textAlign: "center",
    color: "var(--text-muted)",
    marginBottom: "80px",
    maxWidth: "700px",
    margin: "0 auto 80px",
  };

  const contentGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    marginBottom: "80px",
    alignItems: "start",
  };

  const formStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    boxShadow: "var(--shadow-soft)",
  };

  const formTitleStyle = {
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  };

  const formSubtitleStyle = {
    fontSize: "14px",
    color: "var(--text-muted)",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid var(--border)",
    background: "var(--surface)",
    fontSize: "16px",
    color: "var(--text-primary)",
    fontFamily: "Poppins, sans-serif",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "var(--shadow-soft)",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "none",
    minHeight: "140px",
  };

  const buttonStyle = {
    padding: "14px 32px",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px",
    fontWeight: "700",
    background: "var(--btn-bg-alt)",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    marginTop: "10px",
    boxShadow: "var(--shadow-soft)",
  };

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const contactCardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "16px",
    padding: "28px",
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  const contactCardHover = (e) => {
    e.currentTarget.style.transform = "translateX(10px) translateY(-2px)";
    e.currentTarget.style.background = "rgba(236, 72, 153, 0.15)";
    e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.8)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(236, 72, 153, 0.25)";
  };

  const contactCardLeave = (e) => {
    e.currentTarget.style.transform = "translateX(0)";
    e.currentTarget.style.background = "rgba(236, 72, 153, 0.08)";
    e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
  };

  const iconBoxStyle = {
    width: "60px",
    height: "60px",
    background: "var(--btn-bg)",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "var(--shadow-soft)",
  };

  const contactLabelStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "6px",
  };

  const contactValueStyle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "var(--text-primary)",
    marginBottom: "8px",
  };

  const contactLinkStyle = {
    color: "var(--link)",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
    transition: "color 0.3s ease",
  };

  const socialSectionStyle = {
    borderTop: "2px solid var(--border)",
    paddingTop: "60px",
    marginTop: "60px",
  };

  const socialTitleStyle = {
    fontSize: "32px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "40px",
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  };

  const socialLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
  };

  const socialLinkItemStyle = {
    width: "70px",
    height: "70px",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "var(--shadow-soft)",
  };

  const socialLinkHover = (e) => {
    e.currentTarget.style.background = "linear-gradient(135deg, #ec4899, #8b5cf6)";
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(236, 72, 153, 0.3)";
  };

  const socialLinkLeave = (e) => {
    e.currentTarget.style.background = "rgba(236, 72, 153, 0.12)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Get in Touch</h2>
        <p style={subtitleStyle}>
          Have a project in mind or want to collaborate? Send me a message and I'll get back to you as soon as possible.
        </p>

        <div style={contentGridStyle}>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div>
              <h3 style={formTitleStyle}>Send a Message</h3>
              <p style={formSubtitleStyle}>Fill out the form below and I'll respond shortly</p>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#d1d5db" }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                style={inputStyle}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(236, 72, 153, 0.8)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#d1d5db" }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                style={inputStyle}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(236, 72, 153, 0.8)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#d1d5db" }}>
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or inquiry..."
                style={textareaStyle}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(236, 72, 153, 0.8)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-4px)";
                e.target.style.boxShadow = "0 15px 35px rgba(236, 72, 153, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Send Message
            </button>
          </form>

          <div style={contactInfoStyle}>
            <div style={contactCardStyle} onMouseEnter={contactCardHover} onMouseLeave={contactCardLeave}>
              <div style={iconBoxStyle}>
                <span style={{ fontSize: "28px" }}>📱</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={contactLabelStyle}>Phone Number</p>
                <p style={contactValueStyle}>+91 9744590525</p>
                <a
                  href="tel:+919744590525"
                  style={contactLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                  onMouseLeave={(e) => (e.target.style.color = "#ec4899")}
                >
                  Call Now ↗
                </a>
              </div>
            </div>

            <div style={contactCardStyle} onMouseEnter={contactCardHover} onMouseLeave={contactCardLeave}>
              <div style={iconBoxStyle}>
                <img src={Email} alt="Email" style={{ width: 28, height: 28 }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={contactLabelStyle}>Email Address</p>
                <p style={contactValueStyle}>athiraanil351@gmail.com</p>
                <a
                  href="mailto:athiraanil351@gmail.com"
                  style={contactLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                  onMouseLeave={(e) => (e.target.style.color = "#ec4899")}
                >
                  Send Email ↗
                </a>
              </div>
            </div>

            <div style={contactCardStyle} onMouseEnter={contactCardHover} onMouseLeave={contactCardLeave}>
              <div style={iconBoxStyle}>
                <img src={WhatsApp} alt="WhatsApp" style={{ width: 28, height: 28 }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={contactLabelStyle}>WhatsApp</p>
                <p style={contactValueStyle}>+91 9744590525</p>
                <a
                  href="https://wa.me/919744590525?text=Hi%20Athira"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#8b5cf6")}
                  onMouseLeave={(e) => (e.target.style.color = "#ec4899")}
                >
                  Message on WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={socialSectionStyle}>
          <h3 style={socialTitleStyle}>Connect With Me</h3>
          <div style={socialLinksStyle}>
            <a
              href="https://linkedin.com/in/athira-anil-0b547a260"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkItemStyle}
              onMouseEnter={socialLinkHover}
              onMouseLeave={socialLinkLeave}
              title="LinkedIn"
            >
              <img src={LinkedIn} alt="LinkedIn" style={{ width: 32, height: 32 }} />
            </a>

            <a
              href="https://github.com/athira-351"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkItemStyle}
              onMouseEnter={socialLinkHover}
              onMouseLeave={socialLinkLeave}
              title="GitHub"
            >
              <img src={GitHub} alt="GitHub" style={{ width: 32, height: 32 }} />
            </a>

            <a
              href="mailto:athiraanil351@gmail.com"
              style={socialLinkItemStyle}
              onMouseEnter={socialLinkHover}
              onMouseLeave={socialLinkLeave}
              title="Email"
            >
              <img src={Email} alt="Email" style={{ width: 32, height: 32 }} />
            </a>

            {/* <a
              href="tel:+919744590525"
              style={socialLinkItemStyle}
              onMouseEnter={socialLinkHover}
              onMouseLeave={socialLinkLeave}
              title="Phone"
            >
              <img src={Phone} alt="Phone" style={{ width: 32, height: 32 }} />
            </a> */}

            <a
              href="https://wa.me/919744590525?text=Hi%20Athira"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkItemStyle}
              onMouseEnter={socialLinkHover}
              onMouseLeave={socialLinkLeave}
              title="WhatsApp"
            >
              <img src={WhatsApp} alt="WhatsApp" style={{ width: 32, height: 32 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
