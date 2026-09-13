import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

type EducationItem = {
  title: string;
  subtitle: string;
  institution: string;
  period: string;
  result: string;
};

const education: EducationItem[] = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Computer Science and Engineering",
    institution:
      "Alliance College of Engineering & Design, Bengaluru",
    period: "December 2022 – June 2026",
    result: "CGPA: 8.3",
  },
  {
    title: "PUC Science",
    subtitle: "Science Stream",
    institution: "Pre-University Education",
    period: "Completed",
    result: "Percentage: 86.16%",
  },
  {
    title: "SSLC",
    subtitle: "Secondary School",
    institution: "School Education",
    period: "Completed",
    result: "Percentage: 88.64%",
  },
];

const certifications: string[] = [
  "Machine Learning with Python — IBM",
  "Data Structures — UC San Diego",
  "Digital Marketing & eCommerce — Google",
  "Business Intelligence — Google",
  "PCU IDEATHON 2.0 Participant — April 2025",
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="eyebrow">05 / EDUCATION</p>
        <h2>
          Education & <span>Certifications</span>
        </h2>
      </div>

      <div className="education-grid">
        <div className="education-column">
          <h3 className="subheading">
            <GraduationCap size={24} />
            Education
          </h3>

          {education.map((item: EducationItem, index: number) => (
            <motion.div
              className="education-card glass-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="timeline-date">
                <CalendarDays size={16} />
                {item.period}
              </p>

              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
              <small>{item.institution}</small>
              <strong>{item.result}</strong>
            </motion.div>
          ))}
        </div>

        <div className="certification-column">
          <h3 className="subheading">
            <Award size={24} />
            Certifications
          </h3>

          <div className="certification-list">
            {certifications.map(
              (certificate: string, index: number) => (
                <motion.div
                  className="certificate-item"
                  key={certificate}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{certificate}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}