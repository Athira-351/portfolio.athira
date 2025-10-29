import React, { useState } from "react";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone-calling.svg";
import whatsappIcon from "../../assets/whatsapp.svg"
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    platform: "Email",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/client-contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Message sent successfully!");
    setFormData({ name: "", phone: "", message: "", platform: "Email" });
  };

  const styles = {
    section: {
      background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      color: "#212529",
      padding: "60px 20px",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "18px",
      marginBottom: "40px",
      textAlign: "center",
      maxWidth: "600px",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      width: "100%",
      maxWidth: "1000px",
    },
    form: {
      background: "#ffffff",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    input: {
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      fontSize: "16px",
    },
    textarea: {
      resize: "none",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      fontSize: "16px",
    },
    button: {
      padding: "14px 20px",
      borderRadius: "8px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      background: "linear-gradient(to right, #6f42c1, #d63384)",
      color: "#fff",
      cursor: "pointer",
      transition: "transform 0.2s ease",
    },
    contactInfo: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "16px",
      color: "#495057",
      justifyContent: "center",
    },
    icon: {
      width: "28px",
      height: "28px",
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.subheading}>
        Whether you have a question, a project idea, or just want to say hello —
        I’d love to hear from you. Fill out the form and I’ll get back to you soon.
      </p>

      <div style={styles.container}>
        {/* Contact Form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            style={styles.input}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Send Message →
          </button>
        </form>

        {/* Contact Info */}
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <img src={emailIcon} alt="Email" style={styles.icon} />
            <a href="mailto:athiraanil351@gmail.com">athiraanil351@gmail.com</a>
          </div>
          <div style={styles.contactItem}>
            <img src={phoneIcon} alt="Phone" style={styles.icon} />
            <a href="tel:+919744590525">+91-9744590525</a>
          </div>
          <div style={styles.contactItem}>
            <img src={whatsappIcon} alt="WhatsApp" style={styles.icon} />
            <a
              href="https://wa.me/919744590525"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                fetch("http://localhost:5000/api/client-contacts", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: "WhatsApp Visitor",
                    phone: "9744590525",
                    platform: "WhatsApp",
                    message: "Hi, Athira! I want to discuss a project",
                  }),
                });
              }}
            ></a>
          
            <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
            <a
              href="https://www.linkedin.com/in/athira-anil-0b547a260/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          
            <img src={githubIcon} alt="GitHub" style={styles.icon} />
            <a
              href="https://github.com/Athira-351"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;