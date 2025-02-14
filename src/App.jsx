import React from "react";
import { FaGithub, FaLinkedinIn, FaLink } from "react-icons/fa";
import "./App.css";

function App() {
  const websiteURL = "https://sharmadipesh.github.io";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(websiteURL);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Dipesh Sharma</h1>
        <p>Senior Software Engineer (Frontend)</p>
        <p>Bangalore | India</p>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="round-btn"
            href="https://linkedin.com/in/sharmadipesh"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="round-btn"
            href="https://github.com/sharmadipesh"
          >
            <FaGithub className="icon" />
          </a>
          <button onClick={copyToClipboard} className="copy-button round-btn">
            <FaLink className="icon" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <iframe src="./resume.pdf" width="100%" height="100%"></iframe>
      </div>
    </div>
  );
}

export default App;
