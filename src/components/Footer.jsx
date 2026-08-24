import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              M. Kaleem <span>AI</span>
            </Link>
            <p className="footer-title">AI Engineer</p>
            <p className="footer-desc">
              Building intelligent systems with RAG, LLM Agents, Multimodal AI, and modern backend engineering.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Navigation</h4>
            <div className="footer-links">
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <a href="/#projects">Projects</a>
              <a href="/#skills">Skills</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/KaleemMalik289" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/zarbekaleem" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:mrkaleem237@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muhammad Kaleem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
