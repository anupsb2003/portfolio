import { motion } from "framer-motion";
import {
  FolderCode,
} from "lucide-react";
import ecommerce from "../assets/Project/ecommerce.png";
import cropPrediction from "../assets/Project/crop-prediction.png";
import aiImageGeneration from "../assets/Project/AiImageGeneration.png";
import medicalChatbot from "../assets/Project/MedicalChatbot.png";
import expoEcommerceImage from "../assets/Project/expo-ecommerce.png";
import foodBlog from "../assets/Project/food-blog.png";
import { FaGithub } from "react-icons/fa";

type Project = {  
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  details: string;
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
    image: medicalChatbot,
    github: "https://github.com/anupsb2003/Medical-Chatbot-using-LLAMA-2",
    details: "#contact",
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
    image: ecommerce,
    github: "https://github.com/anupsb2003/Custom-E-commerce-Website",
    details: "#contact",
  },
  {
    number: "03",
    title: "AI Crop Prediction System",
    description:
      "An AI-powered crop prediction system using React, Firebase and IoT sensors to monitor soil and environmental conditions and provide crop recommendations.",
    technologies: [
      "React",
      "Firebase",
      "Python",
      "IoT",
      "Machine Learning",
    ],
    image: cropPrediction,
    github: "https://github.com/anupsb2003/SMART-AGRICULTURE-USING-IOT-AND-ML-BASED-CROP-PREDICTION",
    details: "#contact",
  },
  {
    number: "04",
    title: "AI Image Generation Tool",
    description:
      "A text-to-image generation application using Stable Diffusion and ComfyUI with configurable image generation parameters.",
    technologies: [
      "Python",
      "Stable Diffusion",
      "ComfyUI",
    ],
    image: aiImageGeneration,
    github: "https://github.com/anupsb2003/Tecksaksham",
    details: "#contact",
  },
  {
  number: "05",
  title: "Expo E-Commerce Platform",
  description:
    "A modern e-commerce application built with Expo and React Native, featuring product browsing, shopping cart functionality, user-friendly navigation and a responsive mobile shopping experience.",
  technologies: [
    "Expo",
    "React Native",
    "JavaScript",
    "React",
  ],
  image: expoEcommerceImage,
  github: "https://github.com/anupsb2003/Expo-ecommerce",
  details: "#contact",
},
{
  number: "06",
  title: "Food Blog",
  description:
    "A modern food science and culinary blog website exploring ingredients, cooking methods, food reactions, recipes, and culinary culture through an interactive and responsive design.",
  technologies: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
  ],
  image: foodBlog,
  github: "https://github.com/anupsb2003/Food-blog",
  details: "#contact",
},
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
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
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
          >
            {/* Project Image */}
            <div className="project-image-wrapper">
              <div className="project-image-glow"></div>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-image-overlay"></div>

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-folder-icon">
                <FolderCode size={30} />
              </div>
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map(
                  (technology: string, technologyIndex: number) => (
                    <motion.span
                      key={technology}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.15 + technologyIndex * 0.05,
                      }}
                      viewport={{
                        once: true,
                      }}
                    >
                      {technology}
                    </motion.span>
                  )
                )}
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}