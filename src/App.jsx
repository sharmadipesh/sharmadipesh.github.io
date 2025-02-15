import React from "react";

import "./styles/App.css";
import { FaGithub, FaLinkedinIn, FaLink, FaDownload } from "react-icons/fa";

function App() {
  const websiteURL = "https://sharmadipesh.github.io";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(websiteURL);
    alert("URL copied to clipboard!");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "Dipesh_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            href="www.linkedin.com/in/thedipesh"
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
          <button
            onClick={downloadResume}
            className=" copy-button margin-left-10 round-btn"
          >
            <FaDownload className="icon" />
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
