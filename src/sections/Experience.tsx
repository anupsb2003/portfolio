import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="section-heading">
        <p className="eyebrow">04 / EXPERIENCE</p>
        <h2>
          Professional <span>Journey</span>
        </h2>
      </div>

      <div className="timeline">
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <BriefcaseBusiness size={25} />
          </div>

          <div className="timeline-content glass-card">
            <p className="timeline-date">
              <CalendarDays size={17} />
              July 2025 – October 2025
            </p>

            <h3>React Native Intern</h3>
            <h4>Anugraha Exceed Pvt. Ltd., Bengaluru</h4>

            <ul className="timeline-description">
              <li>Built React Native screens for a production application.</li>
              <li>Fixed UI and UX bugs.</li>
              <li>Integrated REST APIs.</li>
              <li>Worked in an Agile development environment.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}