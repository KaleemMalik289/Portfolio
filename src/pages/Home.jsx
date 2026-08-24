import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import ProjectsSection from '../components/ProjectsSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Expertise />
      <ProjectsSection />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
