import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Footer Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            ANUP<span>.</span>SB
          </a>

          <p>Full Stack Developer</p>

          <p className="footer-description">
            Built with React.js, Three.js and Framer Motion.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Links and Back to Top */}
        <div className="footer-right">
          <div className="footer-socials">
            <a
              href="https://github.com/anupsb2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/anup-s-b-4095812b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <a href="#home" className="back-top" aria-label="Back to top">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="container footer-bottom">
        <p>
          © {currentYear} Anup S B. All rights reserved.
        </p>

        <p>Designed and developed by Anup S B.</p>
      </div>
    </footer>
  );
}