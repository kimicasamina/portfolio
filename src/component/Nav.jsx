import React, { useEffect, useState, useRef } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);
  console.log("ACTIVE SESSION:", activeSection);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex sm:flex-col sm:items-end sticky top-12 sm:right-12 self-end gap-y-1 z-10 gap-x-4 mr-4 sm:mr-12">
      <li className="relative">
        <a
          className={`navlink text-green-200 font-semibold ${
            activeSection === "hero" ? "navlink--active" : {}
          }`}
          // activeClass="active"
          href="#hero"
        >
          Hero
        </a>
      </li>
      <li className="relative">
        <a
          className={`navlink text-green-200 font-semibold ${
            activeSection === "skills" ? "navlink--active" : {}
          }`}
          // activeClass="active"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li className="relative">
        <a
          className={`navlink text-green-200 font-semibold ${
            activeSection === "portfolio" ? "navlink--active" : {}
          }`}
          // activeClass="active"
          href="#portfolio"
        >
          Portfolio
        </a>
      </li>
      <li className="relative">
        <a
          className={`navlink text-green-200 font-semibold ${
            activeSection === "contact" ? "navlink--active" : {}
          }`}
          // activeClass="active"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </nav>
  );
}
