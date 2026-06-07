import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Server, Palette, ExternalLink,
  ArrowRight, Zap, TrendingUp, Users, Star,
  Globe, Layers, GitBranch, Coffee
} from 'lucide-react';

/* ── Typewriter hook ─────────────────────────────────────────────────────── */
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 60, pause = 2000) => {
  const stateRef = React.useRef({ text: '', wordIndex: 0, isDeleting: false });
  const [displayText, setDisplayText] = useState('');
  const timeoutRef = React.useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const tick = () => {
      const { text, wordIndex, isDeleting } = stateRef.current;
      const current = words[wordIndex];

      if (!isDeleting && text === current) {
        timeoutRef.current = setTimeout(() => {
          stateRef.current.isDeleting = true;
          tick();
        }, pause);
        return;
      }

      if (isDeleting && text === '') {
        stateRef.current.isDeleting = false;
        stateRef.current.wordIndex = (wordIndex + 1) % words.length;
        timeoutRef.current = setTimeout(tick, typingSpeed);
        return;
      }

      const next = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      stateRef.current.text = next;
      setDisplayText(next);

      timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    };

    timeoutRef.current = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [words, typingSpeed, deletingSpeed, pause]);

  return displayText;
};

/* ── Data ────────────────────────────────────────────────────────────────── */
const roles = ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

const techBadges = ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Vite', 'JavaScript', 'Git'];

const services = [
  {
    icon: <Code2 size={26} />,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive interfaces with React, Vite, and Tailwind CSS fast, clean, and built to impress.',
    color: '#2dd4bf',
    rgb: '45,212,191',
  },
  {
    icon: <Server size={26} />,
    title: 'Backend Development',
    desc: 'Robust REST APIs and server logic with Node.js, Express, and MongoDB secure, scalable, and production-ready.',
    color: '#818cf8',
    rgb: '129,140,248',
  },
  {
    icon: <Globe size={26} />,
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end web applications from database to UI including auth, admin panels, dashboards, and deployment.',
    color: '#60a5fa',
    rgb: '96,165,250',
  },
  {
    icon: <Palette size={26} />,
    title: 'UI/UX Design',
    desc: 'User-centered design with a strong eye for detail clean layouts, smooth interactions, and brand-consistent visuals.',
    color: '#f472b6',
    rgb: '244,114,182',
  },
];
const testimonials = [
  {
    name: "Business Owner",
    text: "Professional, responsive and delivered beyond expectations."
  },
  {
    name: "Healthcare Client",
    text: "Excellent communication and a very clean final product."
  },
  {
    name: "Startup Founder",
    text: "One of the best developers we've worked with."
  }
];

const featuredProjects = [
  {
    title: 'LL Staffing Solutions',
    description:
      'Full-stack healthcare staffing platform with admin panel, 4-step booking system, job listings, and automated email workflows. Deployed on Vercel + Render.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://llstaffingsolution.com',
    gradient: 'linear-gradient(135deg, rgba(45,212,191,0.15), rgba(129,140,248,0.15))',
  },
  {
    title: 'QUENX E-commerce',
    description:
      'Modern fashion storefront with product catalog, shopping cart, checkout flow, and premium brand aesthetics.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://ecommerce-fi93.vercel.app/',
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(244,114,182,0.12))',
  },
];

const stats = [
  { value: '10+', label: 'Projects Completed', icon: <Layers size={22} /> },
  { value: '3+', label: 'Years of Experience', icon: <Star size={22} /> },
  { value: '10+', label: 'Happy Clients', icon: <Users size={22} /> },
  { value: '100%', label: 'Client Satisfaction', icon: <TrendingUp size={22} /> },
];

/* ── Component ───────────────────────────────────────────────────────────── */
const Body = () => {
  const typed = useTypewriter(roles, 90, 50, 2200);

  return (
    <div className="relative z-10" style={{ background: 'transparent' }}>

      {/* ═══════════════ HERO ═══════════════════════════════════════════════ */}
      <section className="min-h-[95vh] flex items-center justify-center relative">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 py-24 fade-up">

          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{
              background: 'rgba(45,212,191,0.08)',
              border: '1px solid rgba(45,212,191,0.25)',
              backdropFilter: 'blur(12px)',
              color: '#2dd4bf',
            }}
          >
            <span className="pulse-dot" />
            Available for Opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6">
            Hi, I'm{' '}
            <span className="gradient-text text-glow">Omodele Temitope</span>
          </h1>

          {/* Typewriter */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light" style={{ color: 'rgba(148,163,184,0.85)' }}>
              {typed}
              <span
                className="cursor-blink ml-0.5 inline-block w-[2px] h-[1.2em] align-middle"
                style={{ background: '#2dd4bf' }}
              />
            </p>
          </div>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6"
            style={{ color: 'rgba(148,163,184,0.65)' }}
          >
            Freelance developer based in Nigeria with 3+ years of experience,
            building full-stack web applications that solve real problems from
            healthcare platforms to e-commerce storefronts.
          </p>

          {/* Tech badge strip */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {techBadges.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(45,212,191,0.07)',
                  border: '1px solid rgba(45,212,191,0.18)',
                  color: 'rgba(148,163,184,0.80)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <Link to="/Resume">
              <button className="btn-glass-primary px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2">
                View My Work <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/Contact">
              <button className="btn-glass-outline px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2">
                Get In Touch <Zap size={16} />
              </button>
            </Link>
          </div>

          {/* Mini about strip */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: <Coffee size={16} />, label: 'Based in Nigeria 🇳🇬' },
              { icon: <GitBranch size={16} />, label: 'Open to Remote Work' },
              { icon: <Code2 size={16} />, label: '3+ Years Experience' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(148,163,184,0.70)',
                }}
              >
                <span style={{ color: '#2dd4bf' }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Choose Me</span>
            </h2>

            <p
              className="max-w-xl mx-auto"
              style={{ color: 'rgba(148,163,184,0.7)' }}
            >
              More than just building websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Fast Delivery",
              "Responsive Design",
              "SEO Optimized",
              "Modern UI/UX",
              "Admin Panel Development",
              "Ongoing Support"
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center"
              >
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(148,163,184,0.70)' }}>
              End-to-end development services from concept to deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <div
                key={i}
                className="glass-card p-7 text-center group fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 icon-glow transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${svc.rgb},0.12)`,
                    border: `1px solid rgba(${svc.rgb},0.25)`,
                    color: svc.color,
                  }}
                >
                  {svc.icon}
                </div>
                <h3 className="font-bold text-base mb-2 text-white">{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.70)' }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURED PROJECTS ═════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(148,163,184,0.70)' }}>
              Recent work showcasing full-stack development capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="glass-card overflow-hidden group fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Gradient header */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-5xl font-black tracking-tighter"
                      style={{ color: 'rgba(255,255,255,0.06)' }}
                    >
                      {project.title.split(' ')[0]}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(3,7,18,0.60)' }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass-primary px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
                    >
                      View Live <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(148,163,184,0.75)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="glass-chip">{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold flex items-center gap-1.5 transition-colors"
                    style={{ color: '#2dd4bf' }}
                  >
                    View Project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-up">
            <Link to="/Resume">
              <button className="btn-glass-outline px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 mx-auto">
                View All Projects <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SKILLS PREVIEW ════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(148,163,184,0.70)' }}>
              Technologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
            {[
              {
                title: 'Frontend',
                skills: ['React & Vite', 'Tailwind CSS', 'JavaScript / TypeScript', 'HTML & CSS', 'Figma Design'],
                color: '#2dd4bf',
                rgb: '45,212,191',
              },
              {
                title: 'Backend',
                skills: ['Node.js & Express', 'MongoDB', 'RESTful APIs', 'JWT Authentication', 'EmailJS'],
                color: '#818cf8',
                rgb: '129,140,248',
              },
              {
                title: 'Tools & Deployment',
                skills: ['Git & GitHub', 'Vercel & Render', 'Postman', 'VS Code', 'npm / yarn'],
                color: '#60a5fa',
                rgb: '96,165,250',
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="glass-card p-7 group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <h3
                  className="text-lg font-bold mb-5 flex items-center gap-2"
                  style={{ color: cat.color }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: cat.color,
                      boxShadow: `0 0 8px ${cat.color}`,
                    }}
                  />
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: 'rgba(203,213,225,0.85)' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: cat.color,
                          boxShadow: `0 0 6px rgba(${cat.rgb},0.60)`,
                        }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-up">
            <Link to="/Skills">
              <button className="btn-glass-outline px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 mx-auto">
                View All Skills <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="glass-card p-8"
              >
                <p
                  className="mb-6"
                  style={{ color: 'rgba(148,163,184,0.75)' }}
                >
                  "{item.text}"
                </p>

                <h4 className="font-bold">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════ STATS ══════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 fade-up">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 sm:p-8 text-center"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'rgba(45,212,191,0.10)',
                    border: '1px solid rgba(45,212,191,0.20)',
                    color: '#2dd4bf',
                  }}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black stat-number mb-1">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'rgba(148,163,184,0.65)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold">
              My Process
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              "Discovery",
              "Planning",
              "Development",
              "Testing",
              "Launch"
            ].map((step, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center"
              >
                <div
                  className="text-3xl font-black mb-3 gradient-text"
                >
                  0{i + 1}
                </div>

                <p>{step}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ═══════════════ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 section-border-top">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-10 sm:p-14 text-center fade-up"
            style={{
              background: 'linear-gradient(135deg, rgba(45,212,191,0.08), rgba(129,140,248,0.08))',
              border: '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex justify-center mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(45,212,191,0.10)',
                  border: '1px solid rgba(45,212,191,0.25)',
                }}
              >
                <Zap size={30} style={{ color: '#2dd4bf' }} />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Need a Website That Brings Results?
            </h2>
            <p
              className="text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgba(148,163,184,0.75)' }}
            >
              Let's discuss your project and build a fast,
              modern website that helps your business grow,
              generate leads and establish credibility online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/Contact">
                <button className="btn-glass-primary px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2">
                  Get In Touch <ArrowRight size={16} />
                </button>
              </Link>
              <a href="https://wa.me/2348144331503" target="_blank" rel="noopener noreferrer">
                <button className="btn-glass-outline px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2">
                  WhatsApp Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/2348144331503"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999]"
      >
        <div
          className="
      w-14 h-14
      bg-green-500
      hover:bg-green-600
      rounded-full
      shadow-xl
      flex items-center
      justify-center
      text-2xl
      transition-all
      duration-300
      hover:scale-110
    "
        >
          💬
        </div>
      </a>
    </div>

  );
};

export default Body;