import React from 'react';
import { motion } from 'framer-motion';
import { experience, education, certifications } from '../data/experience';
import { process } from '../data/skills';
import { Briefcase, GraduationCap, Award, ArrowDown } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        {/* Process Section */}
        <div className="process-wrapper">
          <div className="section-header center">
            <h2 className="h2 section-title">How I Build AI Systems</h2>
          </div>
          
          <div className="process-flow">
            {process.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <span className="step-number">{step.step}</span>
                  <span className="step-title">{step.title}</span>
                </motion.div>
                {index < process.length - 1 && (
                  <motion.div 
                    className="process-arrow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <ArrowDown size={24} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Background Grid */}
        <div className="background-grid">
          {/* Experience Column */}
          <div className="timeline-column">
            <div className="timeline-header">
              <div className="timeline-icon"><Briefcase size={24} /></div>
              <h3 className="h3">Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{exp.role}</h4>
                  <p className="timeline-subtitle">{exp.company} • {exp.duration}</p>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-column">
            <div className="timeline-header">
              <div className="timeline-icon"><GraduationCap size={24} /></div>
              <h3 className="h3">Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <p className="timeline-subtitle">{edu.institution} • {edu.graduation}</p>
                  <p className="timeline-desc">{edu.project}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div className="timeline-column">
            <div className="timeline-header">
              <div className="timeline-icon"><Award size={24} /></div>
              <h3 className="h3">Certifications</h3>
            </div>
            <div className="timeline">
              {certifications.map((cert, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{cert.title}</h4>
                  <p className="timeline-subtitle">{cert.provider}</p>
                  <p className="timeline-desc">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
