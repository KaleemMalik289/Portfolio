import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projects.find(p => p.id === id);
    setProject(found);
  }, [id]);

  if (!project) return <div className="container section"><p>Project not found.</p></div>;

  return (
    <div className="project-details-page">
      <div className="container">
        <Link to="/#projects" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        
        <header className="project-header">
          <span className="project-category">{project.category}</span>
          <h1 className="h1">{project.title}</h1>
          <p className="project-subtitle h3">{project.subtitle}</p>
        </header>

        <div className="project-content">
          <div className="project-main">
            <section className="detail-section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>
            
            {project.features && project.features.length > 0 && (
              <section className="detail-section">
                <h2>Key Features</h2>
                <ul className="feature-list">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          
          <aside className="project-sidebar">
            <div className="sidebar-card">
              <h3>Technologies</h3>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="sidebar-card links-card">
              <h3>Links</h3>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaGithub size={18} /> View Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
