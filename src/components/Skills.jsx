import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getProjectsForSkill = (skill) => {
    return projects
      .filter(p => p.technologies.some(tech => tech.toLowerCase() === skill.toLowerCase()))
      .map(p => p.title);
  };

  const categories = [
    { id: 'programming', label: 'Programming' },
    { id: 'aiMl', label: 'AI / ML' },
    { id: 'generativeAi', label: 'Generative AI' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases / Retrieval' },
    { id: 'devops', label: 'DevOps' }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="h2 section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and frameworks I use to build intelligent systems.</p>
        </div>

        <div className="skills-container">
          <div className="skills-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="skill-category">
                <h3 className="category-title">{cat.label}</h3>
                <div className="skill-tags">
                  {skills[cat.id].map((skill) => (
                    <motion.div
                      key={skill}
                      className="skill-tag-interactive"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                      
                      {hoveredSkill === skill && getProjectsForSkill(skill).length > 0 && (
                        <motion.div 
                          className="skill-tooltip"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <span className="tooltip-title">Used in:</span>
                          <ul>
                            {getProjectsForSkill(skill).map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
