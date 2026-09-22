import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Server,
  Palette,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Globe,
  Layers,
  GitBranch,
  Database,
  ShieldCheck,
  LayoutDashboard,
  Smartphone,
  Mail,
  CheckCircle2,
  BriefcaseBusiness,
  Clock3,
  FileImage,
  CreditCard,
  Megaphone,
  Image,
  Handshake,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import img1 from "../assets/staff.png";
import img2 from "../assets/church.png";

/* =========================
   TYPEWRITER HOOK
========================= */

const useTypewriter = (
  words,
  typingSpeed = 85,
  deletingSpeed = 45
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.substring(0, text.length + 1);
          setText(nextText);

          if (nextText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1400);
          }
        } else {
          const nextText = currentWord.substring(0, text.length - 1);
          setText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
  ]);

  return text;
};

/* =========================
   HERO ROLES
========================= */

const roles = [
  "Full-Stack Developer",
  "React & Node.js Developer",
  "Backend & API Developer",
  "Website Developer",
  "Graphics Designer",
  "Business Card & Flyer Designer",
  "Social Media Graphics Designer",
];

/* =========================
   TECH BADGES
========================= */

const techBadges = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
  "Tailwind CSS",
  "Vite",
  "JavaScript",
  "Git",
];

/* =========================
   SERVICES
========================= */

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Website Development",
    description:
      "Responsive business websites built around real business goals, users and content.",
  },
  {
    icon: <Server size={24} />,
    title: "Backend & API Development",
    description:
      "REST APIs, authentication, databases, middleware and backend integrations using Node.js.",
  },
  {
    icon: <Layers size={24} />,
    title: "Full-Stack Applications",
    description:
      "Complete web applications connecting modern interfaces with APIs and database systems.",
  },
  {
    icon: <Palette size={24} />,
    title: "Graphics & Business Design",
    description:
      "Business cards, flyers, social media graphics, brochures and other business materials.",
  },
];

/* =========================
   STATS
========================= */

const stats = [
  {
    value: "3+",
    label: "Years Experience",
    icon: <TrendingUp size={20} />,
  },
  {
    value: "10+",
    label: "Projects Delivered",
    icon: <Layers size={20} />,
  },
  {
    value: "Full Stack",
    label: "Development",
    icon: <Code2 size={20} />,
  },
  {
    value: "10+",
    label: "Technologies",
    icon: <GitBranch size={20} />,
  },
];

/* =========================
   FEATURED PROJECTS
========================= */

const featuredProjects = [
  {
    title: "LL Staffing Solutions",
    category: "Full-Stack Healthcare Platform",
    description:
      "A full-stack healthcare staffing platform with service information, appointment booking, job listings, application workflows and an administrative system.",
    image: img1,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://llstaffingsolution.com",
    role: "Full-Stack Developer",
  },
  {
    title: "Ibadan North Diocese",
    category: "Church Management Platform",
    description:
      "A modern church platform with secure admin authentication, protected routes, dashboard management, events, announcements and news content management.",
    image: img2,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "MongoDB",
    ],
    link: "https://ibadannorthanglicandiocese.org",
    role: "Full-Stack Developer",
  },
];

/* =========================
   COMPONENT
========================= */

const Body = () => {
  const typedRole = useTypewriter(roles);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Header />

      {/* =========================
          HERO
      ========================= */}

      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[8%] w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-3xl" />

          <div className="absolute bottom-10 right-[8%] w-80 h-80 bg-blue-600/[0.07] rounded-full blur-3xl" />

          <div className="absolute top-[45%] left-[48%] w-40 h-40 bg-emerald-500/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 xl:gap-20 items-center">

            {/* =========================
                LEFT
            ========================= */}

            <div>
              {/* Availability */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] text-emerald-300 text-xs sm:text-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </div>

              {/* Heading */}
              <h1 className="text-[2.7rem] sm:text-5xl lg:text-[3.7rem] xl:text-[4.2rem] font-bold tracking-[-0.025em] leading-[1.05]">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Omodele Temitope{" "}
                  <span className="font-mono text-sm sm:text-base lg:text-lg font-medium tracking-tight text-cyan-400/90 align-middle">
                    (&lt;Emit/&gt;)
                  </span>
                </span>
              </h1>

              {/* Typewriter */}
              <div className="mt-6 min-h-[48px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-mono text-sm">
                    **
                  </span>

                  <h2 className="text-xl sm:text-2xl lg:text-[1.7rem] font-semibold text-slate-200">
                    {typedRole}
                  </h2>

                  <span className="text-cyan-400 animate-pulse font-mono">
                    _
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-[1.05rem] text-slate-400 leading-7">
                Full-stack developer based in Nigeria with 3+ years of
                experience building responsive websites, production-ready web
                applications, dashboards, APIs and database-driven systems.
                I also provide professional graphics and business design
                services.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-6 max-w-2xl">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.035] text-[11px] sm:text-xs text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/Resume"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 text-sm font-semibold hover:bg-cyan-50 transition"
                >
                  View My Work

                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition"
                  />
                </Link>

                <Link
                  to="/Contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-semibold hover:bg-white/[0.08] transition"
                >
                  Get In Touch
                  <Mail size={17} />
                </Link>
              </div>

              {/* Availability strip */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-7 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Globe size={15} className="text-cyan-400" />
                  Based in Nigeria 🇳🇬
                </span>

                <span className="flex items-center gap-2">
                  <GitBranch size={15} className="text-cyan-400" />
                  Open to Remote Work
                </span>

                <span className="flex items-center gap-2">
                  <Handshake size={15} className="text-cyan-400" />
                  Projects & Contracts
                </span>
              </div>
            </div>

            {/* =========================
                RIGHT  CURRENT ROLE
            ========================= */}

            <div className="relative hidden lg:block">
              <div className="relative max-w-[420px] mx-auto">

                <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5 shadow-2xl">

                  {/* Top */}
                  <div className="flex items-start justify-between gap-5 mb-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                        Current Role
                      </p>

                      <h3 className="text-lg font-semibold mt-1.5">
                        Full-Stack Developer
                      </h3>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-[11px] text-emerald-400">
                          Internship · Current
                        </span>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                      <BriefcaseBusiness
                        className="text-cyan-400"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* SmartPay */}
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-start gap-3.5">

                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                        <Server
                          className="text-blue-400"
                          size={19}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-semibold text-white">
                            SmartPay
                          </h4>

                          <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 uppercase tracking-wide">
                            Current
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-500 mt-1">
                          Full-Stack Developer Intern
                        </p>

                        <p className="text-xs text-slate-400 mt-3 leading-5">
                          Working across frontend and backend technologies to
                          build and maintain production fintech applications,
                          dashboards, APIs and database-driven workflows.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Opportunity */}
                  <div className="mt-3 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.035] p-3.5">
                    <div className="flex items-start gap-3">
                      <Clock3
                        size={17}
                        className="text-cyan-400 mt-0.5 shrink-0"
                      />

                      <div>
                        <p className="text-xs font-medium text-white">
                          Still open to opportunities
                        </p>

                        <p className="text-[11px] text-slate-500 mt-1 leading-5">
                          Open to remote jobs, freelance projects, contracts
                          and collaborations alongside my current internship.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="grid grid-cols-2 gap-2.5 mt-3">

                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3.5">
                      <Code2
                        size={18}
                        className="text-cyan-400 mb-2.5"
                      />

                      <p className="text-[10px] text-slate-500">
                        Frontend
                      </p>

                      <p className="text-xs font-medium mt-1">
                        React + Vite
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3.5">
                      <Database
                        size={18}
                        className="text-emerald-400 mb-2.5"
                      />

                      <p className="text-[10px] text-slate-500">
                        Backend
                      </p>

                      <p className="text-xs font-medium mt-1">
                        Node + MongoDB
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3.5">
                      <ShieldCheck
                        size={18}
                        className="text-blue-400 mb-2.5"
                      />

                      <p className="text-[10px] text-slate-500">
                        Security
                      </p>

                      <p className="text-xs font-medium mt-1">
                        JWT + Middleware
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3.5">
                      <LayoutDashboard
                        size={18}
                        className="text-purple-400 mb-2.5"
                      />

                      <p className="text-[10px] text-slate-500">
                        Systems
                      </p>

                      <p className="text-xs font-medium mt-1">
                        APIs + Dashboards
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -z-10 -inset-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-emerald-500/10 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          STATS
      ========================= */}

      <section className="relative py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5 hover:bg-white/[0.045] hover:border-cyan-400/20 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400 mb-3">
                  {stat.icon}
                </div>

                <p className="text-lg sm:text-xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          WHAT I BRING
      ========================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              What I Bring
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mt-3">
              Building beyond the interface
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-7">
              I work across the stack  from responsive interfaces and
              component architecture to APIs, authentication, databases,
              deployment and business graphics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {[
              {
                icon: <Smartphone size={20} />,
                title: "Responsive Interfaces",
                text: "Interfaces designed to work smoothly across mobile, tablet and desktop devices.",
              },
              {
                icon: <Server size={20} />,
                title: "Production APIs",
                text: "Backend APIs built around real application requirements and structured data flows.",
              },
              {
                icon: <ShieldCheck size={20} />,
                title: "Secure Authentication",
                text: "Authentication, authorization, protected routes and middleware-based access control.",
              },
              {
                icon: <LayoutDashboard size={20} />,
                title: "Admin Dashboards",
                text: "Management dashboards for handling users, content, transactions and application data.",
              },
              {
                icon: <Database size={20} />,
                title: "Database Systems",
                text: "MongoDB-backed applications with structured models and API-driven data management.",
              },
              {
                icon: <Palette size={20} />,
                title: "Business Graphics",
                text: "Professional business cards, flyers, social media graphics, brochures and promotional designs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.045] hover:border-cyan-400/20 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-6 mt-2">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="py-20 bg-white/[0.012] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Services
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mt-3">
              Development & design services
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-7">
              From complete web applications to business graphics, I help
              businesses build and maintain the digital assets they need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-white/10 bg-[#020617]/70 p-5 hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-400/15 transition">
                  {service.icon}
                </div>

                <h3 className="text-base font-semibold">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-6 mt-2.5">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm mt-5 hover:text-cyan-300 transition"
                >
                  View service
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          GRAPHICS DESIGN
      ========================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* Left */}
              <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10">

                <div className="flex items-center gap-3 mb-5">
                  <Palette
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                    Graphics Design
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Your business should
                  <br />
                  <span className="text-slate-500">
                    look professional too.
                  </span>
                </h2>

                <p className="mt-5 text-sm text-slate-400 leading-7 max-w-md">
                  Beyond web development, I create practical graphics that
                  businesses can use for marketing, branding, social media,
                  promotions and print.
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 mt-7 text-sm text-cyan-400 hover:text-cyan-300 transition"
                >
                  Explore design services
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right */}
              <div className="grid sm:grid-cols-2">

                {[
                  {
                    icon: <CreditCard size={20} />,
                    title: "Business Cards",
                    text: "Professional front-and-back business card designs.",
                  },
                  {
                    icon: <Megaphone size={20} />,
                    title: "Flyers & Posters",
                    text: "Promotional designs for offers, events and services.",
                  },
                  {
                    icon: <Image size={20} />,
                    title: "Social Media Graphics",
                    text: "Branded posts, adverts, banners and promotional graphics.",
                  },
                  {
                    icon: <FileImage size={20} />,
                    title: "Brochures & Profiles",
                    text: "Company profiles, brochures and branded business documents.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 md:p-8 border-b border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300">
                      {item.icon}
                    </div>

                    <h3 className="mt-5 text-sm font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED PROJECTS
      ========================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">

            <div className="max-w-2xl">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
                Selected Work
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold mt-3">
                Featured projects
              </h2>

              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-7">
                A selection of websites and full-stack applications built for
                real-world use cases.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-cyan-400/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-56 relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-white">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="text-[11px] text-cyan-300">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="text-xl font-bold">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm leading-6 mt-2.5">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="shrink-0 w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section className="py-20 bg-white/[0.012] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Technical Skills
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mt-3">
              My development toolkit
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-7">
              Technologies I use to design, develop, connect and deploy modern
              web applications.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-4">

            {/* Frontend */}
            <div className="rounded-xl border border-white/10 bg-[#020617]/70 p-6">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                  <Code2 size={20} />
                </div>

                <h3 className="text-lg font-semibold">
                  Frontend
                </h3>

              </div>

              <div className="space-y-3">

                {[
                  "React & Vite",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML & CSS",
                  "Responsive Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-400"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-cyan-400"
                    />

                    {skill}
                  </div>
                ))}

              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl border border-white/10 bg-[#020617]/70 p-6">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-lg bg-blue-400/10 text-blue-400 flex items-center justify-center">
                  <Server size={20} />
                </div>

                <h3 className="text-lg font-semibold">
                  Backend
                </h3>

              </div>

              <div className="space-y-3">

                {[
                  "Node.js & Express",
                  "MongoDB",
                  "REST APIs",
                  "JWT Authentication",
                  "Middleware",
                  "Database Integration",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-400"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-blue-400"
                    />

                    {skill}
                  </div>
                ))}

              </div>
            </div>

            {/* Tools */}
            <div className="rounded-xl border border-white/10 bg-[#020617]/70 p-6">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                  <GitBranch size={20} />
                </div>

                <h3 className="text-lg font-semibold">
                  Tools & Deployment
                </h3>

              </div>

              <div className="space-y-3">

                {[
                  "Git & GitHub",
                  "Vercel",
                  "Render",
                  "Postman",
                  "VS Code",
                  "npm",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-400"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400"
                    />

                    {skill}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              My Process
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mt-3">
              From idea to deployment
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-7">
              A structured approach that keeps the project clear from the
              initial idea through development and launch.
            </p>

          </div>

          <div className="grid md:grid-cols-5 gap-3">

            {[
              {
                number: "01",
                title: "Discovery",
                text: "Understand the goals, users and requirements.",
              },
              {
                number: "02",
                title: "Planning",
                text: "Structure the pages, features, stack and workflow.",
              },
              {
                number: "03",
                title: "Development",
                text: "Build the interface, backend and required integrations.",
              },
              {
                number: "04",
                title: "Testing",
                text: "Test responsiveness, functionality and application flows.",
              },
              {
                number: "05",
                title: "Launch",
                text: "Deploy the application and prepare it for real users.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <span className="text-3xl font-bold text-white/[0.08]">
                  {step.number}
                </span>

                <h3 className="text-base font-semibold mt-4">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-6 mt-2">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          OPPORTUNITIES CTA
      ========================= */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] via-blue-500/[0.05] to-transparent p-7 sm:p-10 text-center">

            <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-400/10 blur-3xl rounded-full" />

            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-5">
                <BriefcaseBusiness
                  className="text-cyan-400"
                  size={23}
                />
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                Open to opportunities
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-3">
                Let's build something useful.
              </h2>

              <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base mt-4 leading-7">
                I'm currently working as a Full-Stack Developer Intern at
                SmartPay and remain open to remote jobs, freelance projects,
                contracts, collaborations and other development opportunities.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-7">

                <Link
                  to="/Contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 text-sm font-semibold hover:bg-cyan-50 transition"
                >
                  Discuss a Project
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="https://wa.me/2348144331503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-semibold hover:bg-white/[0.08] transition"
                >
                  WhatsApp Me
                  <ExternalLink size={16} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      {/* <Footer /> */}
    </div>
  );
};

export default Body;