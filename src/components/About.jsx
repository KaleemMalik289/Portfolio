import React from 'react';
import { motion } from 'framer-motion';
import { Code, BrainCircuit, Database, Cpu } from 'lucide-react';
import profilePic from '../assets/PROFILE.png';
import './About.css';

const About = () => {
  const stats = [
    { icon: <BrainCircuit size={20} />, label: "RAG Systems", value: "4+" },
    { icon: <Cpu size={20} />, label: "AI Agents", value: "3+" },
    { icon: <Database size={20} />, label: "Data Pipelines", value: "5+" },
    { icon: <Code size={20} />, label: "AI Domains", value: "6" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Actual profile image from assets */}
          <div className="profile-image-container">
            <img 
              src={profilePic}
              alt="Muhammad Kaleem" 
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2 section-title">About Me</h2>
          
          <div className="about-text">
            <p>
              I am an AI Engineer with a BS in Computer Science, focused on building real-world intelligent applications. My engineering mindset drives me to move beyond experimental scripts and build production-ready systems.
            </p>
            <p>
              My expertise spans Retrieval-Augmented Generation (RAG), LLM agents, and Multimodal AI. I leverage frameworks like LangChain and LangGraph alongside robust backends built with Python and FastAPI to create intelligent, automated solutions.
            </p>
            <p>
              Whether it's building voice agents that handle real phone calls or developing semantic search platforms for video understanding, I am passionate about bridging the gap between cutting-edge AI models and practical business value.
            </p>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
