import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, Eye, Mic, Server, Layers } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
  const cards = [
    {
      icon: <Search size={28} />,
      title: "RAG Systems",
      description: "Building knowledge-grounded AI assistants using retrieval, embeddings, vector databases and LLMs.",
      tags: ["LangChain", "ChromaDB", "Embeddings"]
    },
    {
      icon: <Bot size={28} />,
      title: "AI Agents",
      description: "Designing agents capable of reasoning, tool usage, database interaction and workflow automation.",
      tags: ["LangGraph", "Tool Calling", "ReAct"]
    },
    {
      icon: <Layers size={28} />,
      title: "Multimodal AI",
      description: "Combining text, visual, audio and video information into intelligent applications.",
      tags: ["Video Understanding", "CLIP"]
    },
    {
      icon: <Eye size={28} />,
      title: "Computer Vision",
      description: "Object detection, image/video understanding, OCR, semantic visual search and visual intelligence.",
      tags: ["PyTorch", "YOLO", "OCR"]
    },
    {
      icon: <Mic size={28} />,
      title: "Voice AI",
      description: "Building conversational voice agents capable of handling real-world workflows.",
      tags: ["Vapi", "Whisper", "Speech-to-Text"]
    },
    {
      icon: <Server size={28} />,
      title: "AI Backend Engineering",
      description: "Developing scalable AI APIs and services using Python and FastAPI.",
      tags: ["Python", "FastAPI", "PostgreSQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="h2 section-title">AI Engineering Expertise</h2>
          <p className="section-subtitle">Core competencies in modern AI system design</p>
        </div>
        
        <motion.div 
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} className="expertise-card" variants={itemVariants}>
              <div className="expertise-icon">{card.icon}</div>
              <h3 className="expertise-card-title">{card.title}</h3>
              <p className="expertise-card-desc">{card.description}</p>
              <div className="expertise-tags">
                {card.tags.map(tag => (
                  <span key={tag} className="expertise-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
