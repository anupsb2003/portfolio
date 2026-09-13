import { motion } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import Scene3D from "../components/Scene3D";
import Particles from "../components/Particles";

const skills: string[] = [
  "React.js",
  "React Native",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Java",
  "Python",
  "RESTful APIs",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Power BI",
  "Figma",
  "Git",
  "GitHub Actions",
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Particles />

      <div className="container hero-container">
        {/* Hero Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">
            <Code2 size={18} />
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            ANUP <span>S B</span>
          </h1>

          <h2>
            FULL STACK <span>DEVELOPER</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using
            React, Node.js, MongoDB, Java and Python.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/anupsb2003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/anup-s-b-4095812b4/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a href="#resume" aria-label="Resume">
              <Download size={22} />
            </a>
          </div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="visual-label label-one">React.js</div>
          <div className="visual-label label-two">Node.js</div>
          <div className="visual-label label-three">MongoDB</div>

          <Scene3D />
        </motion.div>
      </div>

      {/* Moving Skills Section */}
      <div className="hero-skills-section">
        <h3 className="hero-skills-title">
          TECHNOLOGIES &amp; EXPERTISE
        </h3>

        <div className="skills-marquee">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <div
                className="skill-marquee-item"
                key={`${skill}-${index}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
}