import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">&gt;_</span>
          <span className="logo-name">ANUP</span>
          <span className="logo-dot">.</span>
          <span className="logo-name">SB</span>
        </a>

        {/* Desktop and Mobile Navigation */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-hire-button"
            onClick={closeMenu}
          >
            Contact Me
            <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}