import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Code2,
  Award,
  TrendingUp,
  ExternalLink,
  Star,
  Zap,
  Users,
  Server,
  Layers,
} from 'lucide-react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'SmartPay',
    type: 'Internship',
    period: 'Sept 2026 – Present',
    duration: 'Current',
    location: 'Nigeria · Remote',
    status: 'Active',

    responsibilities: [
      'Develop and maintain full-stack web applications using React.js, Node.js, Express.js, MongoDB, and REST APIs',
      'Contribute to production financial technology systems involving user accounts, investments, earnings, wallets, and transaction-related workflows',
      'Build responsive dashboards, administrative interfaces, and data-driven components for internal and customer-facing applications',
      'Implement authentication, authorization, API integration, database operations, and protected application workflows',
      'Work across both frontend and backend codebases to debug issues, improve functionality, and deliver new features',
      'Develop and maintain product interfaces including SmartPayShareholder and SmartWageLock web applications',
    ],

    achievements: [
      'Contributed to the development of real-world fintech applications used for investment and financial management workflows',
      'Worked across the full development stack, from responsive React interfaces to Express.js APIs and MongoDB data operations',
      'Implemented and improved dashboard features for displaying earnings, investments, products, withdrawals, and portfolio information',
      'Gained hands-on experience working with production-oriented application architecture and financial data workflows',
    ],

    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT',
      'Tailwind CSS',
      'Vite',
      'Git',
    ],

    accent: '#2dd4bf',
    accentRgb: '45,212,191',
    icon: '💻',
  },

  {
    title: 'Front-end Development Intern',
    company: 'Valuemax',
    type: 'Internship',
    period: 'Jan 2025 – Dec 2025',
    duration: '1 Year',
    location: 'Nigeria',
    status: 'Completed',

    responsibilities: [
      'Developed responsive user interfaces using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS',
      'Collaborated with developers and team members to implement new website features and improve existing interfaces',
      'Participated in code reviews, debugging, testing, and application maintenance',
      'Worked with Git and GitHub for version control and collaborative development',
      'Applied responsive design principles to ensure applications worked effectively across desktop, tablet, and mobile devices',
      'Followed professional development workflows and contributed to agile team activities',
    ],

    achievements: [
      'Completed a full year of professional software development experience in a team environment',
      'Strengthened practical experience with React.js, Git, responsive design, and modern frontend workflows',
      'Contributed to real development tasks while working alongside other developers',
    ],

    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
      'Git',
      'GitHub',
      'Responsive Design',
    ],

    accent: '#818cf8',
    accentRgb: '129,140,248',
    icon: '🚀',
  },

  {
    title: 'Full Stack Web Developer',
    company: 'Freelance',
    type: 'Self-Employed',
    period: '2023 – Present',
    duration: '3+ Years',
    location: 'Remote',
    status: 'Active',

    responsibilities: [
      'Design, develop, and deploy modern business websites, web applications, dashboards, and administrative systems',
      'Build responsive frontend applications using React.js, Vite, Tailwind CSS, JavaScript, and modern UI development practices',
      'Develop backend services and REST APIs using Node.js and Express.js with MongoDB databases',
      'Implement authentication, protected routes, form handling, API integrations, and database-driven features',
      'Work directly with clients to understand requirements, plan solutions, deliver projects, and handle post-launch improvements',
      'Deploy and maintain production applications while troubleshooting frontend, backend, and hosting-related issues',
    ],

    achievements: [
      'Delivered 10+ web projects and business-focused digital solutions',
      'Built production websites featuring booking systems, application forms, admin dashboards, blogs, surveys, and business management functionality',
      'Expanded from frontend development into full-stack application development using Node.js, Express.js, MongoDB, and REST APIs',
      'Worked with clients across different business sectors to create responsive and conversion-focused digital experiences',
    ],

    technologies: [
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Next.js',
      'Tailwind CSS',
      'REST APIs',
      'Git',
      'Vite',
    ],

    accent: '#60a5fa',
    accentRgb: '96,165,250',
    icon: '⚡',
  },
];

const stats = [
  {
    value: '3+',
    label: 'Years Experience',
    icon: <TrendingUp size={20} />,
    color: '#2dd4bf',
  },
  {
    value: '10+',
    label: 'Projects Delivered',
    icon: <Briefcase size={20} />,
    color: '#818cf8',
  },
  {
    value: '10+',
    label: 'Technologies',
    icon: <Code2 size={20} />,
    color: '#60a5fa',
  },
  {
    value: 'Full Stack',
    label: 'Development',
    icon: <Layers size={20} />,
    color: '#f472b6',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState({});

  const toggleTab = (index, tab) => {
    setActiveTab((prev) => ({
      ...prev,
      [index]: prev[index] === tab ? null : tab,
    }));
  };

  return (
    <>
      <Header />

      <div
        className="relative min-h-screen mt-[70px]"
        style={{ background: 'transparent' }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28">

          {/* HERO */}
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
              Experience &amp; Career Journey
            </h1>

            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgba(148,163,184,0.80)' }}
            >
              From frontend development to full-stack engineering, building
              production-ready web applications, business websites, dashboards,
              and scalable digital solutions.
            </p>
          </div>

          {/* STATS */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass-card p-5 flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                  style={{
                    background: `${s.color}15`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>

                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {s.value}
                </div>

                <div
                  className="text-xs font-medium"
                  style={{
                    color: 'rgba(148,163,184,0.70)',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CAREER HIGHLIGHTS */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <Server size={20} />,
                title: 'Full Stack Development',
                description:
                  'Frontend, backend, APIs, databases, authentication, and deployment.',
              },
              {
                icon: <Briefcase size={20} />,
                title: '10+ Projects Delivered',
                description:
                  'Business websites, dashboards, admin systems, and production applications.',
              },
              {
                icon: <Code2 size={20} />,
                title: 'Modern Tech Stack',
                description:
                  'React, Node.js, Express, MongoDB, Tailwind CSS, Next.js, and REST APIs.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center"
              >
                <div
                  className="w-11 h-11 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(45,212,191,0.08)',
                    border: '1px solid rgba(45,212,191,0.18)',
                    color: '#2dd4bf',
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: 'rgba(148,163,184,0.70)',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className="relative">
            <div className="space-y-10">

              {experiences.map((exp, index) => {
                const activeSection =
                  activeTab[index] || 'responsibilities';

                return (
                  <div
                    key={index}
                    className="fade-up relative"
                    style={{
                      animationDelay: `${0.2 + index * 0.15}s`,
                    }}
                  >

                    {/* TIMELINE DOT */}
                    <div
                      className="absolute -left-1 top-8 w-3 h-3 rounded-full hidden lg:block z-10"
                      style={{
                        background: exp.accent,
                        boxShadow: `0 0 12px ${exp.accent}`,
                        marginLeft: '18px',
                      }}
                    />

                    {/* CARD */}
                    <div
                      className="glass-card overflow-hidden"
                      style={{
                        borderTop: `3px solid ${exp.accent}`,
                        boxShadow: `0 0 30px rgba(${exp.accentRgb},0.06), 0 20px 60px rgba(0,0,0,0.3)`,
                      }}
                    >

                      {/* CARD HEADER */}
                      <div className="p-6 sm:p-8">

                        <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                          {/* ICON */}
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                            style={{
                              background: `rgba(${exp.accentRgb},0.12)`,
                              border: `1px solid rgba(${exp.accentRgb},0.25)`,
                            }}
                          >
                            {exp.icon}
                          </div>

                          {/* TITLE */}
                          <div className="flex-1 min-w-0">

                            <div className="flex flex-wrap items-center gap-2 mb-1">

                              <h2 className="text-xl sm:text-2xl font-bold text-white">
                                {exp.title}
                              </h2>

                              <span
                                className="text-xs px-3 py-0.5 rounded-full font-semibold"
                                style={{
                                  background:
                                    exp.status === 'Active'
                                      ? 'rgba(45,212,191,0.12)'
                                      : 'rgba(255,255,255,0.06)',
                                  border:
                                    exp.status === 'Active'
                                      ? '1px solid rgba(45,212,191,0.30)'
                                      : '1px solid rgba(255,255,255,0.10)',
                                  color:
                                    exp.status === 'Active'
                                      ? '#2dd4bf'
                                      : 'rgba(203,213,225,0.70)',
                                }}
                              >
                                {exp.status === 'Active' && (
                                  <span
                                    className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mr-1.5 align-middle"
                                    style={{ marginBottom: '1px' }}
                                  />
                                )}

                                {exp.status}
                              </span>
                            </div>

                            {/* COMPANY */}
                            <div className="flex flex-wrap items-center gap-2 mb-3">

                              <span
                                className="text-base font-semibold"
                                style={{
                                  color: exp.accent,
                                }}
                              >
                                {exp.company}
                              </span>

                              <span
                                className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                                style={{
                                  background: 'rgba(255,255,255,0.05)',
                                  border:
                                    '1px solid rgba(255,255,255,0.10)',
                                  color: 'rgba(203,213,225,0.75)',
                                }}
                              >
                                {exp.type}
                              </span>
                            </div>

                            {/* META */}
                            <div
                              className="flex flex-wrap gap-4 text-sm"
                              style={{
                                color: 'rgba(148,163,184,0.70)',
                              }}
                            >
                              <span className="flex items-center gap-1.5">
                                <Calendar
                                  size={13}
                                  style={{
                                    color: exp.accent,
                                  }}
                                />
                                {exp.period}
                              </span>

                              <span className="flex items-center gap-1.5">
                                <TrendingUp
                                  size={13}
                                  style={{
                                    color: exp.accent,
                                  }}
                                />
                                {exp.duration}
                              </span>

                              <span className="flex items-center gap-1.5">
                                <MapPin
                                  size={13}
                                  style={{
                                    color: exp.accent,
                                  }}
                                />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* TECHNOLOGIES */}
                        <div
                          className="flex flex-wrap gap-2 mt-5 pt-5"
                          style={{
                            borderTop:
                              '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full font-medium"
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

                      {/* TABS */}
                      <div
                        className="flex border-b"
                        style={{
                          borderColor:
                            'rgba(255,255,255,0.06)',
                          background:
                            'rgba(255,255,255,0.02)',
                        }}
                      >
                        {[
                          'responsibilities',
                          'achievements',
                        ].map((tab) => (
                          <button
                            key={tab}
                            onClick={() =>
                              toggleTab(index, tab)
                            }
                            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 capitalize"
                            style={{
                              color:
                                activeSection === tab
                                  ? exp.accent
                                  : 'rgba(148,163,184,0.60)',

                              borderBottom:
                                activeSection === tab
                                  ? `2px solid ${exp.accent}`
                                  : '2px solid transparent',

                              background:
                                activeSection === tab
                                  ? `rgba(${exp.accentRgb},0.05)`
                                  : 'transparent',
                            }}
                          >
                            {tab === 'responsibilities' ? (
                              <Code2 size={14} />
                            ) : (
                              <Award size={14} />
                            )}

                            {tab === 'responsibilities'
                              ? 'Responsibilities'
                              : 'Achievements'}
                          </button>
                        ))}
                      </div>

                      {/* TAB CONTENT */}
                      <div className="p-6 sm:p-8">

                        {activeSection === 'responsibilities' && (
                          <ul className="space-y-3">
                            {exp.responsibilities.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm"
                                style={{
                                  color:
                                    'rgba(203,213,225,0.85)',
                                }}
                              >
                                <CheckCircle
                                  size={15}
                                  className="flex-shrink-0 mt-0.5"
                                  style={{
                                    color: exp.accent,
                                  }}
                                />

                                <span className="leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {activeSection === 'achievements' && (
                          <ul className="space-y-3">
                            {exp.achievements.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm"
                                style={{
                                  color:
                                    'rgba(203,213,225,0.85)',
                                }}
                              >
                                <div
                                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                  style={{
                                    background: `rgba(${exp.accentRgb},0.15)`,
                                    border: `1px solid rgba(${exp.accentRgb},0.30)`,
                                  }}
                                >
                                  <Star
                                    size={10}
                                    style={{
                                      color: exp.accent,
                                    }}
                                  />
                                </div>

                                <span className="leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-20 rounded-2xl p-10 sm:p-14 text-center fade-up"
            style={{
              background:
                'linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(129,140,248,0.06) 50%, rgba(59,130,246,0.05) 100%)',
              border:
                '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(20px)',
              animationDelay: '0.5s',
            }}
          >

            <div className="flex justify-center mb-4">

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    'rgba(45,212,191,0.10)',
                  border:
                    '1px solid rgba(45,212,191,0.25)',
                }}
              >
                <Users
                  size={26}
                  style={{ color: '#2dd4bf' }}
                />
              </div>

            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
              Ready To Build Something Amazing?
            </h3>

            <p
              className="mb-8 text-base max-w-md mx-auto"
              style={{
                color:
                  'rgba(148,163,184,0.75)',
              }}
            >
              Whether you need a business website,
              dashboard, admin panel, API, or full-stack
              application, I'm ready to help bring your
              idea to life.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link to="/Contact">
                <button className="btn-glass-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm">
                  <Zap size={16} />
                  Get In Touch
                </button>
              </Link>

              <Link to="/Resume">
                <button
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                  style={{
                    background:
                      'rgba(255,255,255,0.04)',
                    border:
                      '1px solid rgba(255,255,255,0.12)',
                    color:
                      'rgba(241,245,249,0.85)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.08)';

                    e.currentTarget.style.borderColor =
                      'rgba(255,255,255,0.20)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.04)';

                    e.currentTarget.style.borderColor =
                      'rgba(255,255,255,0.12)';
                  }}
                >
                  <ExternalLink size={16} />
                  View Works
                </button>
              </Link>

            </div>
          </div>

        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/2348144331503"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999]"
          aria-label="Chat on WhatsApp"
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

        <Footer />
      </div>
    </>
  );
};

export default Experience;
