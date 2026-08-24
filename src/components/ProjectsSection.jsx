import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI Agents', 'RAG', 'Multimodal AI', 'Computer Vision', 'Voice AI', 'Machine Learning'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="h2 section-title">Featured Projects</h2>
          
          <div className="project-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="project-card"
              >
                <div className="project-card-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-thumbnail" />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.title.substring(0, 2)}</span>
                    </div>
                  )}
                </div>
                
                <div className="project-card-content">
                  <span className="project-category-tag">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  
                  <div className="project-actions">
                    <Link to={`/projects/${project.id}`} className="btn btn-primary btn-sm">
                      Case Study <ArrowRight size={16} />
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm icon-only">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm icon-only">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
