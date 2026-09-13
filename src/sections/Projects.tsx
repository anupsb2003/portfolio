import { motion } from "framer-motion";
import {
  ExternalLink,
  FolderCode,
} from "lucide-react";
import {
  FaGithub,
} from "react-icons/fa";
type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Medical Q&A Chatbot",
    description:
      "A multilingual medical question-answering chatbot supporting English and Kannada with vector search and doctor recommendation features.",
    technologies: [
      "Python",
      "LLaMA-2",
      "LangChain",
      "FAISS",
      "Hugging Face",
    ],
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    description:
      "A full stack e-commerce platform with authentication, product customization, cart management, order management and REST API integration.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
    ],
  },
  {
    number: "03",
    title: "AI Image Generation Tool",
    description:
      "A text-to-image generation application using Stable Diffusion and ComfyUI with configurable generation parameters.",
    technologies: ["Python", "Stable Diffusion", "ComfyUI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project: Project, index: number) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <FolderCode size={32} />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((technology: string) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a href="#contact">
                <ExternalLink size={18} />
                Details
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}