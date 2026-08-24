import React, { useState } from 'react';
import { Mail, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Replace this with your actual Web3Forms access key
    const accessKey = "b968fbc4-625a-4610-8706-11dcd3c8c1a2";

    // If key is not configured, show alert and fallback to mailto
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      alert("Note: Email API key is not configured. Redirecting to your mail app as a fallback.\nTo fix this, go to web3forms.com, get a free key for mrkaleem237@gmail.com, and paste it in src/components/Contact.jsx!");
      const mailtoLink = `mailto:mrkaleem237@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus('idle');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">

        <div className="contact-info">
          <h2 className="h1 contact-title">Let's Build Something <span className="text-gradient">Intelligent</span></h2>
          <p className="contact-desc">
            Have an AI product, automation workflow, or intelligent application in mind? Let's connect and discuss how we can bring it to life.
          </p>

          <div className="contact-links">
            <a href="mailto:mrkaleem237@gmail.com" className="contact-link">
              <Mail size={24} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/zarbekaleem" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin size={24} /> LinkedIn
            </a>
            <a href="https://github.com/KaleemMalik289" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub size={24} /> GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FileText size={24} /> Download Resume
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                minLength="10"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${status}`}
              disabled={status === 'loading'}
            >
              {status === 'idle' && <><Send size={18} /> Send Message</>}
              {status === 'loading' && <span className="loader"></span>}
              {status === 'success' && <><CheckCircle size={18} /> Sent (Opening Mail)</>}
              {status === 'error' && <><AlertCircle size={18} /> Error</>}
            </button>
            {status === 'success' && (
              <p className="form-status-msg">Opening your default mail client as a fallback.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
