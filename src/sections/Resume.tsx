import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="section section-dark">
      <div className="section-heading">
        <p className="eyebrow">06 / RESUME</p>
        <h2>
          My <span>Resume</span>
        </h2>
      </div>

      <div className="resume-card glass-card">
        <div className="resume-icon">
          <FileText size={65} />
        </div>

        <div>
          <h3>ANUP S B — Full Stack Developer</h3>

          <p>
            View my education, internship, projects, technical skills and
            certifications.
          </p>

          <div className="resume-actions">
            <a
              href="/Anup_SB_Resume_SDE.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View Resume
            </a>

            <a
              href="/Anup_SB_Resume_SDE.pdf"
              download
              className="secondary-button"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}