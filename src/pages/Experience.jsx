import React, { useState } from 'react';
import {
  Briefcase, Calendar, MapPin, CheckCircle, Code2,
  Award, TrendingUp, ExternalLink, Star, Zap, Users
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'Front-end Developer',
    company: 'Freelance',
    type: 'Self-Taught',
    period: 'Jan 2022 – Present',
    duration: '3+ Years',
    location: 'Remote',
    status: 'Active',
    responsibilities: [
      'Designed and developed multiple web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js',
      'Implemented responsive design and ensured cross-browser compatibility across all major browsers',
      'Utilized Git and GitHub for version control and collaboration with clients',
      'Built and deployed scalable projects using Vite + React with optimized performance',
      'Managed client relationships and delivered projects on time and within scope',
    ],
    achievements: [
      'Delivered 10+ successful projects with 100% client satisfaction',
      'Increased user engagement by 20% through optimized UI/UX implementations',
      'Boosted conversion rates by 15% across multiple client projects',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'Vite', 'Bootstrap'],
    accent: '#2dd4bf',
    accentRgb: '45,212,191',
    icon: '💼',
  },
  {
    title: 'Front-end Development Intern',
    company: 'Valuemax',
    type: 'Internship',
    period: 'Jan 2024 – Dec 2025',
    duration: '1 Year',
    location: 'Nigeria',
    status: 'Completed',
    responsibilities: [
      'Assisted in the development of web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js',
      'Participated in code reviews and ensured code quality following best practices',
      'Collaborated with senior developers to identify and fix bugs in production environments',
      'Contributed to team meetings and agile development processes',
      'Learned industry-standard workflows and professional development practices',
    ],
    achievements: [
      'Successfully completed assigned tasks with minimal supervision',
      'Contributed to improved code quality through active participation in reviews',
      'Gained hands-on experience with professional development workflows',
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'Agile'],
    accent: '#818cf8',
    accentRgb: '139,92,246',
    icon: '🚀',
  },
];

const stats = [
  { value: '3+', label: 'Years Experience', icon: <TrendingUp size={20} />, color: '#2dd4bf' },
  { value: '10+', label: 'Projects Delivered', icon: <Briefcase size={20} />, color: '#818cf8' },
  { value: '10+', label: 'Technologies', icon: <Code2 size={20} />, color: '#60a5fa' },
  { value: '100%', label: 'Client Satisfaction', icon: <Star size={20} />, color: '#f472b6' },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState({});

  const toggleTab = (index, tab) => {
    setActiveTab(prev => ({ ...prev, [index]: prev[index] === tab ? null : tab }));
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen" style={{ background: 'transparent' }}>




        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28">

          {/* ── Hero Section ───────────────────────────────────── */}
          <div className="text-center mb-20 fade-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.25)',
                backdropFilter: 'blur(12px)',
                color: '#2dd4bf',
              }}
            >
              <Briefcase size={14} />
              Professional Journey
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
              Work <span className="gradient-text">Experience</span>
            </h1>

            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(148,163,184,0.80)' }}>
              3+ years building modern web applications and delivering exceptional digital experiences.
            </p>
          </div>

          {/* ── Stats Row ──────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 fade-up" style={{ animationDelay: '0.1s' }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass-card p-5 flex flex-col items-center text-center gap-2"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                  style={{ background: `rgba(${s.color === '#2dd4bf' ? '45,212,191' : s.color === '#818cf8' ? '129,140,248' : s.color === '#60a5fa' ? '96,165,250' : '244,114,182'},0.12)`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(148,163,184,0.70)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Timeline ───────────────────────────────────────── */}
          <div className="relative">

            <div className="space-y-10">
              {experiences.map((exp, index) => {
                const activeSection = activeTab[index] || 'responsibilities';
                return (
                  <React.Fragment key={index}>
                    <div
                      className="fade-up relative"
                      style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                    >
                      {/* Timeline Dot – desktop only */}
                      <div
                        className="absolute -left-1 top-8 w-3 h-3 rounded-full hidden lg:block z-10"
                        style={{
                          background: exp.accent,
                          boxShadow: `0 0 12px ${exp.accent}`,
                          marginLeft: '18px',
                        }}
                      />

                      <div
                        className="glass-card overflow-hidden"
                        style={{
                          borderTop: `3px solid ${exp.accent}`,
                          boxShadow: `0 0 30px rgba(${exp.accentRgb},0.06), 0 20px 60px rgba(0,0,0,0.3)`,
                        }}
                      >
                        {/* Card Header */}
                        <div className="p-6 sm:p-8">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                            {/* Icon bubble */}
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                              style={{
                                background: `rgba(${exp.accentRgb},0.12)`,
                                border: `1px solid rgba(${exp.accentRgb},0.25)`,
                              }}
                            >
                              {exp.icon}
                            </div>

                            {/* Title block */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h2>
                                {/* Status pill */}
                                <span
                                  className="text-xs px-3 py-0.5 rounded-full font-semibold"
                                  style={{
                                    background: exp.status === 'Active' ? 'rgba(45,212,191,0.12)' : 'rgba(255,255,255,0.06)',
                                    border: `1px solid ${exp.status === 'Active' ? 'rgba(45,212,191,0.30)' : 'rgba(255,255,255,0.10)'}`,
                                    color: exp.status === 'Active' ? '#2dd4bf' : 'rgba(203,213,225,0.70)',
                                  }}
                                >
                                  {exp.status === 'Active' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mr-1.5 align-middle" style={{ marginBottom: '1px' }} />}
                                  {exp.status}
                                </span>
                              </div>

                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="text-base font-semibold" style={{ color: exp.accent }}>{exp.company}</span>
                                <span
                                  className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                                  style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                    color: 'rgba(203,213,225,0.75)',
                                  }}
                                >
                                  {exp.type}
                                </span>
                              </div>

                              {/* Meta row */}
                              <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'rgba(148,163,184,0.70)' }}>
                                <span className="flex items-center gap-1.5">
                                  <Calendar size={13} style={{ color: exp.accent }} />
                                  {exp.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <TrendingUp size={13} style={{ color: exp.accent }} />
                                  {exp.duration}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MapPin size={13} style={{ color: exp.accent }} />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-200"
                                style={{
                                  background: `rgba(${exp.accentRgb},0.08)`,
                                  border: `1px solid rgba(${exp.accentRgb},0.20)`,
                                  color: exp.accent,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tab Bar */}
                        <div
                          className="flex border-b"
                          style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                        >
                          {['responsibilities', 'achievements'].map(tab => (
                            <button
                              key={tab}
                              onClick={() => toggleTab(index, tab)}
                              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 capitalize"
                              style={{
                                color: activeSection === tab ? exp.accent : 'rgba(148,163,184,0.60)',
                                borderBottom: activeSection === tab ? `2px solid ${exp.accent}` : '2px solid transparent',
                                background: activeSection === tab ? `rgba(${exp.accentRgb},0.05)` : 'transparent',
                              }}
                            >
                              {tab === 'responsibilities' ? <Code2 size={14} /> : <Award size={14} />}
                              {tab === 'responsibilities' ? 'Responsibilities' : 'Achievements'}
                            </button>
                          ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-6 sm:p-8">
                          {activeSection === 'responsibilities' && (
                            <ul className="space-y-3">
                              {exp.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(203,213,225,0.85)' }}>
                                  <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: exp.accent }} />
                                  <span className="leading-relaxed">{r}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {activeSection === 'achievements' && (
                            <ul className="space-y-3">
                              {exp.achievements.map((a, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(203,213,225,0.85)' }}>
                                  <div
                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: `rgba(${exp.accentRgb},0.15)`, border: `1px solid rgba(${exp.accentRgb},0.30)` }}
                                  >
                                    <Star size={10} style={{ color: exp.accent }} />
                                  </div>
                                  <span className="leading-relaxed">{a}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                );
              })}
            </div>
          </div>

          {/* ── CTA Card ───────────────────────────────────────── */}
          <div
            className="mt-20 rounded-2xl p-10 sm:p-14 text-center fade-up"
            style={{
              background: 'linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(129,140,248,0.06) 50%, rgba(59,130,246,0.05) 100%)',
              border: '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(20px)',
              animationDelay: '0.5s',
            }}
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(45,212,191,0.10)', border: '1px solid rgba(45,212,191,0.25)' }}
              >
                <Users size={26} style={{ color: '#2dd4bf' }} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Let's Work Together</h3>
            <p className="mb-8 text-base max-w-md mx-auto" style={{ color: 'rgba(148,163,184,0.75)' }}>
              Interested in collaborating or learning more about my experience? I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/Contact">
                <button className="btn-glass-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm">
                  <Zap size={16} /> Get In Touch
                </button>
              </Link>
              <Link to="/Resume">
                <button
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(241,245,249,0.85)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                >
                  <ExternalLink size={16} /> View Works
                </button>
              </Link>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Experience;
