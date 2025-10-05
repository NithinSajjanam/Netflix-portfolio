import React from 'react';
import './ContactMe.css';
import profilePic from '../images/sky.png'; // Replace with your actual image
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  const userData = {
    name: "S Nityanandh",
    title: "Full Stack Developer | Data Analyst",
    summary: "Passionate about building scalable AI-powered applications, dashboards, and cloud-hosted APIs. Skilled in React.js, Node.js, FastAPI, Python, and AWS.",
    companyUniversity: "B.Com (Computer Applications) — Vikas Degree College, Sircilla",
    linkedinLink: "https://linkedin.com/in/nityanandh-sajjanam-994543209",
    githubLink: "https://github.com/NithinSajjanam",
    portfolioLink: "https://nityanandh.netlify.app/",
    email: "nnithin357@gmail.com",
    phoneNumber: "+91-9866244512"
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="S Nityanandh" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <div className="badge-links">
            <a
              href={userData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> LinkedIn
            </a>
            <a
              href={userData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaGithub className="github-icon" /> GitHub
            </a>
            <a
              href={userData.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaGlobe className="portfolio-icon" /> Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
