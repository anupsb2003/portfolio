import { useState } from "react";
import type {
  ChangeEvent,
  SyntheticEvent,
} from "react";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = "anup-portfolio";

// Replace this with your actual EmailJS Template ID
const TEMPLATE_ID = "template_q2uxjma";

const PUBLIC_KEY = "NtU4E06-6IdEh_3x-";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (
    event: SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log(
        "Email sent successfully:",
        response.status,
        response.text
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (sendError: unknown) {
      console.error("EmailJS sending error:", sendError);

      if (
        typeof sendError === "object" &&
        sendError !== null &&
        "status" in sendError &&
        "text" in sendError
      ) {
        const emailError = sendError as {
          status?: number;
          text?: string;
        };

        setError(
          `Email failed: ${emailError.status ?? ""} ${
            emailError.text ?? "Unknown EmailJS error"
          }`
        );
      } else {
        setError("Unable to send your message. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Contact Heading */}
      <div className="contact-heading">
        <p className="contact-eyebrow">GET IN TOUCH</p>

        <h2>
          Let's build <span>something great.</span>
        </h2>

        <p className="contact-intro">
          Have a project in mind? I'd love to hear about it. Send me a
          message and let's discuss how we can work together.
        </p>
      </div>

      {/* Contact Content */}
      <div className="contact-grid">
        {/* Contact Form */}
        <motion.div
          className="contact-form-card glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-submit-button"
              disabled={loading}
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={20} />
                </>
              )}
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="success-message" role="status">
                <CheckCircle size={22} />

                <span>
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="error-message" role="alert">
                <AlertCircle size={22} />

                <span>{error}</span>
              </div>
            )}
          </form>
        </motion.div>

        {/* Right Side Content */}
        <div className="contact-side">
          {/* Contact Information */}
          <motion.div
            className="contact-info-card glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>

            <div className="contact-info-list">
              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={23} />
                </div>

                <div>
                  <span>Email</span>

                  <a href="mailto:anupsb2003@gmail.com">
                    anupsb2003@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={23} />
                </div>

                <div>
                  <span>Phone</span>

                  <a href="tel:+919353482234">
                    +91 9353482234
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <span>Location</span>
                  <p>Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Card */}
          <motion.div
            className="availability-card glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="availability-title">
              <span className="availability-dot"></span>
              <h4>Currently Available</h4>
            </div>

            <p>
              I'm currently open to new opportunities and exciting
              projects. Whether you need a full-time engineer or a
              freelance consultant, let's talk!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}