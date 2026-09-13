import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Java", "REST API"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MYSQL"],
  },
  {
    title: "AI / ML",
    skills: ["LLaMA-2", "LangChain", "FAISS", "Stable Diffusion", "ML"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Power BI", "ComfyUI"],
  },
  {
    title: "Concepts",
    skills: ["Core Java", "API Integration", "OOP", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="section-heading">
        <p className="eyebrow">02 / TECH STACK</p>
        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group: SkillGroup, index: number) => (
          <motion.div
            className="skill-card glass-card"
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill: string) => (
                <span key={skill}>  {skill}  </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}