import React from "react";
import {
  Code2,
  GitBranch,
  Lightbulb,
  Palette,
  Database,
  Server,
  Layers,
  Wrench,
  Globe,
  ShieldCheck,
  Plug,
  LayoutDashboard,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const skillCategories = [
  {
    icon: <Code2 size={28} />,
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Vite",
    ],
    glow: "rgba(45,212,191,0.20)",
  },
  {
    icon: <Palette size={28} />,
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "Web Accessibility",
      "Modern UI Design",
      "Component-Based UI",
    ],
    glow: "rgba(236,72,153,0.18)",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "RESTful APIs",
      "Authentication & JWT",
      "Middleware",
    ],
    glow: "rgba(251,146,60,0.20)",
  },
  {
    icon: <Database size={28} />,
    title: "Database & Data",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "JSON",
      "Data Modelling",
      "CRUD Operations",
      "Aggregation Pipelines",
    ],
    glow: "rgba(16,185,129,0.20)",
  },
  {
    icon: <GitBranch size={28} />,
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Chrome DevTools",
      "Code Review",
    ],
    glow: "rgba(139,92,246,0.20)",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Professional Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Agile Methodologies",
      "Technical Communication",
      "Debugging",
      "Project Delivery",
    ],
    glow: "rgba(251,191,36,0.18)",
  },
];

const expertise = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Frontend Applications",
    description:
      "Responsive, component-driven interfaces using React, Next.js, JavaScript and modern CSS frameworks.",
    technologies: "React · Next.js · JavaScript · Vite · Tailwind CSS",
  },
  {
    icon: <Server size={24} />,
    title: "Backend & APIs",
    description:
      "Server-side applications, REST APIs, authentication, middleware and business logic built with Node.js.",
    technologies: "Node.js · Express.js · NestJS · REST APIs · JWT",
  },
  {
    icon: <Database size={24} />,
    title: "Database Systems",
    description:
      "Structured data models, CRUD workflows, aggregation and database-driven application features.",
    technologies: "MongoDB · Mongoose · JSON · Data Modelling",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Authentication & Security",
    description:
      "Authentication workflows and protected application routes using JWT, middleware and secure API patterns.",
    technologies: "JWT · Middleware · Protected Routes · API Security",
  },
  {
    icon: <Plug size={24} />,
    title: "API Integration",
    description:
      "Connecting frontend applications with backend services and building data-driven application workflows.",
    technologies: "REST APIs · HTTP · JSON · API Testing",
  },
  {
    icon: <Wrench size={24} />,
    title: "Development Workflow",
    description:
      "Version control, debugging, API testing and maintaining clean development workflows from implementation to deployment.",
    technologies: "Git · GitHub · Postman · VS Code · DevTools",
  },
];

const thingsIBuild = [
  "Business Websites",
  "Corporate Websites",
  "E-Commerce Stores",
  "Landing Pages",
  "Booking & Appointment Systems",
  "Admin Dashboards",
  "Healthcare Platforms",
  "Real Estate Websites",
  "School & Educational Platforms",
  "Fintech & Web Applications",
];
const learning = [
  "TypeScript",
  "Advanced NestJS",
  "Docker",
  "System Design",
];

const Skills = () => {
  return (
    <>
      <Header />

      <main
        className="relative min-h-screen overflow-hidden mt-[70px]"
        style={{ background: "transparent" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">

          {/* =========================================================
              HERO
          ========================================================== */}
          <section className="text-center mb-16 fade-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(45,212,191,0.08)",
                border: "1px solid rgba(45,212,191,0.18)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#2dd4bf",
                  boxShadow: "0 0 10px rgba(45,212,191,0.8)",
                }}
              />

              <span
                className="text-sm font-medium"
                style={{ color: "#5eead4" }}
              >
                Full-Stack Development
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-5 leading-tight">
              Technical{" "}
              <span className="gradient-text">Skills</span>
              <br />
              & Full-Stack Expertise
            </h1>

            <p
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: "rgba(148,163,184,0.80)" }}
            >
              I build responsive web applications across the frontend,
              backend and database layers combining modern user interfaces,
              APIs, authentication and data-driven systems.
            </p>

            <div
              className="mt-7 h-1 w-20 mx-auto rounded-full"
              style={{
                background: "linear-gradient(90deg, #2dd4bf, #818cf8)",
              }}
            />
          </section>

          {/* =========================================================
              FULL STACK FLOW
          ========================================================== */}
          <section
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-16 fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {[
              {
                label: "Frontend",
                icon: <Code2 size={18} />,
                color: "#2dd4bf",
              },
              {
                label: "Backend",
                icon: <Server size={18} />,
                color: "#f97316",
              },
              {
                label: "Database",
                icon: <Database size={18} />,
                color: "#10b981",
              },
              {
                label: "APIs",
                icon: <Plug size={18} />,
                color: "#818cf8",
              },
            ].map((item, i) => (
              <React.Fragment key={item.label}>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ color: item.color }}>
                    {item.icon}
                  </span>

                  <span
                    className="text-sm sm:text-base font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </span>
                </div>

                {i < 3 && (
                  <span
                    className="hidden sm:block"
                    style={{ color: "rgba(148,163,184,0.45)" }}
                  >
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </section>

          {/* =========================================================
              SKILL CATEGORIES
          ========================================================== */}
          <section className="mb-24">
            <div className="text-center mb-10">
              <p
                className="text-sm uppercase tracking-[0.2em] mb-3"
                style={{ color: "#2dd4bf" }}
              >
                Technology Stack
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Tools I{" "}
                <span className="gradient-text">Work With</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, i) => (
                <div
                  key={cat.title}
                  className="glass-card p-6 group fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: cat.glow,
                        border: `1px solid ${cat.glow}`,
                        color: "#2dd4bf",
                      }}
                    >
                      {cat.icon}
                    </div>

                    <h3
                      className="text-base font-bold"
                      style={{ color: "#2dd4bf" }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3"
                        style={{
                          color: "rgba(203,213,225,0.85)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            background: "#2dd4bf",
                            boxShadow:
                              "0 0 6px rgba(45,212,191,0.60)",
                          }}
                        />

                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              CORE TECHNICAL EXPERTISE
          ========================================================== */}
          <section className="mb-24">
            <div className="text-center mb-10">
              <p
                className="text-sm uppercase tracking-[0.2em] mb-3"
                style={{ color: "#2dd4bf" }}
              >
                Core Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                What I Can{" "}
                <span className="gradient-text">Work On</span>
              </h2>

              <p
                className="max-w-2xl mx-auto mt-4 leading-relaxed"
                style={{ color: "rgba(148,163,184,0.75)" }}
              >
                My skill set covers the major layers of modern web
                application development, from interface design to
                backend services and persistent data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, i) => (
                <div
                  key={item.title}
                  className="glass-card p-6 group fade-up"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: "rgba(45,212,191,0.08)",
                        border:
                          "1px solid rgba(45,212,191,0.16)",
                        color: "#2dd4bf",
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        {item.title}
                      </h3>

                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{
                          color: "rgba(148,163,184,0.78)",
                        }}
                      >
                        {item.description}
                      </p>

                      <div
                        className="text-xs font-medium leading-relaxed"
                        style={{ color: "#5eead4" }}
                      >
                        {item.technologies}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              HOW I WORK ACROSS THE STACK
          ========================================================== */}
          <section className="mb-24">
            <div className="glass-card p-7 sm:p-10">
              <div className="text-center mb-10">
                <p
                  className="text-sm uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#2dd4bf" }}
                >
                  Full-Stack Workflow
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold">
                  From{" "}
                  <span className="gradient-text">
                    Interface to Backend
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Frontend */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        background:
                          "rgba(45,212,191,0.10)",
                        color: "#2dd4bf",
                      }}
                    >
                      <Code2 size={21} />
                    </div>

                    <h3 className="font-bold text-lg">
                      Frontend
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(148,163,184,0.78)",
                    }}
                  >
                    I create responsive interfaces with reusable
                    components, modern layouts and responsive
                    design principles.
                  </p>
                </div>

                {/* Backend */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        background:
                          "rgba(249,115,22,0.10)",
                        color: "#fb923c",
                      }}
                    >
                      <Server size={21} />
                    </div>

                    <h3 className="font-bold text-lg">
                      Backend
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(148,163,184,0.78)",
                    }}
                  >
                    I build APIs, server-side logic, authentication
                    flows and middleware for applications that need
                    reliable backend functionality.
                  </p>
                </div>

                {/* Database */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        background:
                          "rgba(16,185,129,0.10)",
                        color: "#10b981",
                      }}
                    >
                      <Database size={21} />
                    </div>

                    <h3 className="font-bold text-lg">
                      Database
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(148,163,184,0.78)",
                    }}
                  >
                    I work with MongoDB and Mongoose to structure,
                    store and retrieve application data through
                    backend services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
    WHAT I CAN BUILD
========================================================== */}
          <section className="mb-24 fade-up">
            <div className="text-center mb-10">
              <p
                className="text-sm uppercase tracking-[0.2em] mb-3"
                style={{ color: "#2dd4bf" }}
              >
                Websites & Applications
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                What I Can{" "}
                <span className="gradient-text">Build</span>
              </h2>

              <p
                className="max-w-2xl mx-auto mt-4 leading-relaxed"
                style={{ color: "rgba(148,163,184,0.75)" }}
              >
                From professional business websites and landing pages to
                dashboards, e-commerce platforms and custom full-stack
                applications, I can build solutions around your business
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {thingsIBuild.map((item) => (
                <div
                  key={item}
                  className="
          glass-card
          px-4
          py-4
          text-center
          group
          transition-all
          duration-300
          hover:-translate-y-1
        "
                >
                  <div className="flex justify-center mb-2">
                    <Layers
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: "#2dd4bf" }}
                    />
                  </div>

                  <span
                    className="text-xs sm:text-sm font-medium leading-tight"
                    style={{ color: "rgba(226,232,240,0.88)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
    glass-card
    px-4 py-5
    text-center
    group
    transition-all duration-300
    hover:-translate-y-1
    border border-cyan-400/20
    mt-4
  "
            >
              <div className="flex justify-center mb-2">
                <Layers
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "#2dd4bf" }}
                />
              </div>

              <span
                className="text-xs sm:text-sm font-semibold leading-tight"
                style={{ color: "rgba(226,232,240,0.95)" }}
              >
                And Almost Anything You Can Imagine
              </span>

              <p
                className="text-[11px] mt-2 leading-relaxed"
                style={{ color: "rgba(148,163,184,0.7)" }}
              >
                If it can technically be built for the web, I can explore,
                design and develop a solution around it.
              </p>
            </div>
          </section>

          {/* =========================================================
              DEVELOPMENT TOOLS
          ========================================================== */}
          <section className="mb-24">
            <div
              className="glass-card p-7 sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.05), rgba(129,140,248,0.05))",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background:
                          "rgba(139,92,246,0.10)",
                        color: "#a78bfa",
                      }}
                    >
                      <Wrench size={25} />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold">
                      Development{" "}
                      <span className="gradient-text">
                        Workflow
                      </span>
                    </h2>
                  </div>

                  <p
                    className="max-w-2xl leading-relaxed"
                    style={{
                      color: "rgba(148,163,184,0.75)",
                    }}
                  >
                    I use modern development tools to manage code,
                    test APIs, debug applications and maintain a
                    structured development workflow.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:max-w-md lg:justify-end">
                  {[
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Postman",
                    "Chrome DevTools",
                    "Vercel",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        background:
                          "rgba(255,255,255,0.04)",
                        border:
                          "1px solid rgba(255,255,255,0.08)",
                        color:
                          "rgba(226,232,240,0.88)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              CURRENTLY LEARNING
          ========================================================== */}
          <section className="mb-24 fade-up">
            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background:
                      "rgba(45,212,191,0.08)",
                    color: "#2dd4bf",
                    border:
                      "1px solid rgba(45,212,191,0.15)",
                  }}
                >
                  <Lightbulb size={25} />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Currently{" "}
                <span className="gradient-text">
                  Learning
                </span>
              </h2>

              <p
                className="max-w-2xl mx-auto mb-7 text-sm sm:text-base"
                style={{
                  color: "rgba(148,163,184,0.75)",
                }}
              >
                Continuously expanding my backend, infrastructure
                and software engineering knowledge.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background:
                        "rgba(45,212,191,0.08)",
                      border:
                        "1px solid rgba(45,212,191,0.20)",
                      color: "#2dd4bf",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================
              STATS / CTA
          ========================================================== */}
          <section
            className="rounded-2xl p-8 sm:p-10 text-center fade-up"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,212,191,0.10), rgba(129,140,248,0.10))",
              border:
                "1px solid rgba(45,212,191,0.20)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex justify-center mb-5">
              <div
                className="p-3 rounded-xl"
                style={{
                  background:
                    "rgba(45,212,191,0.08)",
                  color: "#2dd4bf",
                }}
              >
                <Globe size={25} />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Let's Build Your Next Project
            </h2>

            <p
              className="max-w-2xl mx-auto mb-9 leading-relaxed"
              style={{
                color: "rgba(148,163,184,0.75)",
              }}
            >
              Whether you need a business website, dashboard,
              booking platform, API backend or complete full-stack
              application, I can help turn your requirements into
              a functional web solution.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                {
                  value: "10+",
                  label: "Projects Completed",
                },
                {
                  value: "15+",
                  label: "Technologies Used",
                },
                {
                  value: "Full-Stack",
                  label: "Development",
                },
                {
                  value: "End-To-End",
                  label: "Solutions",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 sm:px-8 py-5 rounded-xl min-w-[145px]"
                  style={{
                    background:
                      "rgba(255,255,255,0.04)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>

                  <div
                    className="text-sm"
                    style={{
                      color:
                        "rgba(148,163,184,0.70)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="btn-glass-primary px-8 py-3 rounded-xl font-bold"
              >
                Contact Me
              </a>

              <a
                href="/resume"
                className="glass-card px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                View Resume
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* =========================================================
          WHATSAPP FLOATING BUTTON
      ========================================================== */}
      <a
        href="https://wa.me/2348144331503"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999] group"
      >
        <div
          className="
            w-14 h-14
            md:w-15 md:h-15
            rounded-full
            bg-[#25D366]
            hover:bg-[#20bd5a]
            shadow-[0_8px_30px_rgba(37,211,102,0.35)]
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
            active:scale-95
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 md:w-8 md:h-8 text-white fill-current"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372.074-.57.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.875 11.875 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 00-3.479-8.416" />
          </svg>
        </div>

        <span
          className="
            absolute
            right-full
            mr-3
            top-1/2
            -translate-y-1/2
            whitespace-nowrap
            rounded-lg
            bg-slate-900
            px-3 py-2
            text-xs
            font-medium
            text-white
            opacity-0
            translate-x-2
            pointer-events-none
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-200
            shadow-lg
          "
        >
          Chat with me on WhatsApp
        </span>
      </a>

      <Footer />
    </>
  );
};

export default Skills;