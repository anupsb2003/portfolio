import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  UserRound,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT ME</p>

        <h2>
          Behind the <span>Code</span>
        </h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-card glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="profile-symbol">
            <UserRound size={70} />
          </div>

          <h3>ANUP S B</h3>
          <p className="profile-role">Full Stack Developer</p>

          <div className="profile-info">
            <p>
              <MapPin size={18} />
              Bengaluru, Karnataka
            </p>

            <p>
              <GraduationCap size={18} />
              Computer Science Engineer
            </p>

            <p>
              <Briefcase size={18} />
              React Native Intern
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I am a final-year Computer Science and Engineering student with a
            strong interest in full stack development and modern application
            development.
          </p>

          <p>
            I enjoy creating responsive user interfaces, developing backend
            APIs, connecting databases and solving real-world problems using
            technology.
          </p>

          <p>
            My experience includes React Native development, MERN stack
            projects, Python-based AI applications and Java programming.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>8.3</strong>
              <span>CGPA</span>
            </div>

            <div className="stat-card">
              <strong>5+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <strong>1</strong>
              <span>Internship</span>
            </div>

            <div className="stat-card">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}