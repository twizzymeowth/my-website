"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex flex-col gap-2" aria-label="In page navigation">
      {navItems.map(({ label, href }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <a
            key={href}
            href={href}
            className={`group flex items-center gap-3 py-1.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span
              className={`block h-px transition-all duration-300 ${
                isActive
                  ? "w-16 bg-foreground"
                  : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              }`}
            />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
