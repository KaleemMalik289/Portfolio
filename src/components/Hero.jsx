import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI ENGINEER
          </motion.div>
          
          <motion.h1 
            className="h1 hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building Intelligent, <br/>
            <span className="text-gradient">Production-Ready</span> AI Systems
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I design and build AI-powered applications using RAG, LLM agents, multimodal AI, computer vision, voice AI, and modern backend technologies.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FileText size={18} /> Download Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual hidden-mobile"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Abstract AI Visualization using pure CSS */}
          <div className="ai-node-system">
            <div className="node center-node">LLM</div>
            <div className="node satellite node-1">RAG</div>
            <div className="node satellite node-2">Agents</div>
            <div className="node satellite node-3">Vision</div>
            <div className="node satellite node-4">Voice</div>
            <svg className="node-lines" viewBox="0 0 200 200">
              <line x1="100" y1="100" x2="100" y2="20" />
              <line x1="100" y1="100" x2="180" y2="100" />
              <line x1="100" y1="100" x2="100" y2="180" />
              <line x1="100" y1="100" x2="20" y2="100" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
