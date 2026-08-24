import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Expertise', href: '/#expertise' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isHomePage = location.pathname === '/';

  const scrollToSection = (e, href) => {
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          M. Kaleem <span>AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden-mobile">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions hidden-mobile">
          <a href="https://github.com/KaleemMalik289" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/zarbekaleem" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin size={20} />
          </a>
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <FileText size={16} /> Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle hidden-desktop" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="mobile-nav-link"
          >
            {link.name}
          </a>
        ))}
        <div className="mobile-actions">
          <a href="https://github.com/KaleemMalik289" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/zarbekaleem" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin size={24} />
          </a>
          <div style={{ marginLeft: 'auto' }}>
            <ThemeToggle />
          </div>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginTop: '1rem'}}>
          <FileText size={18} /> Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
