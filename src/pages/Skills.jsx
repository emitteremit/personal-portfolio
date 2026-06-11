import React, { useEffect, useState } from 'react';
import { Code2, GitBranch, Lightbulb, Palette, Database, Wrench, Server, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const skillCategories = [
  {
    icon: <Code2 size={28} />,
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Vite'],
    glow: 'rgba(45,212,191,0.20)',
  },
  {
    icon: <Palette size={28} />,
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Web Accessibility', 'Modern UI Design'],
    glow: 'rgba(236,72,153,0.18)',
  },
  {
    icon: <Server size={28} />,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'Authentication & JWT', 'Middleware'],
    glow: 'rgba(251,146,60,0.20)',
  },
  {
    icon: <Database size={28} />,
    title: 'Database',
    skills: ['MongoDB', 'Mongoose ODM', 'JSON', 'Data Modelling', 'CRUD Operations', 'Aggregation Pipelines'],
    glow: 'rgba(16,185,129,0.20)',
  },
  {
    icon: <GitBranch size={28} />,
    title: 'Version Control & Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Code Review'],
    glow: 'rgba(139,92,246,0.20)',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Communication'],
    glow: 'rgba(251,191,36,0.18)',
  },
];

const proficiencies = [
  { name: 'HTML / CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React.js / Next.js', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js / Express.js', level: 85 },
  { name: 'MongoDB', level: 82 },
  { name: 'NestJS', level: 68 },
  { name: 'Git / GitHub', level: 85 },
];

const Skills = () => {
  const [bars, setBars] = useState(proficiencies.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setBars(proficiencies.map(p => p.level));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden mt-[70px]" style={{ background: 'transparent' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">

          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
              <br />
              & Full-Stack Expertise
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(148,163,184,0.80)' }}>
              Building modern, scalable and responsive web applications
              using industry-standard technologies across the full stack,
              from intuitive user interfaces to powerful backend systems.
            </p>
            <div
              className="mt-6 h-1 w-20 mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, #2dd4bf, #818cf8)' }}
            />
          </div>

          {/* Full-Stack Banner */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-14 fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {[
              { label: 'Frontend', color: '#2dd4bf' },
              { label: '→', color: 'rgba(148,163,184,0.50)' },
              { label: 'Backend', color: '#f97316' },
              { label: '→', color: 'rgba(148,163,184,0.50)' },
              { label: 'Database', color: '#10b981' },
            ].map((item, i) => (
              <span
                key={i}
                className="text-lg font-bold tracking-wide"
                style={{ color: item.color }}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="glass-card p-6 group fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: cat.glow,
                      border: `1px solid ${cat.glow}`,
                      color: '#2dd4bf',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold" style={{ color: '#2dd4bf' }}>{cat.title}</h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'rgba(203,213,225,0.85)' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#2dd4bf', boxShadow: '0 0 6px rgba(45,212,191,0.60)' }}
                      />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-20 fade-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">
                What I Can <span className="gradient-text">Build</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Business Websites',
                'Admin Dashboards',
                'Healthcare Platforms',
                'E-Commerce Stores',
                'Portfolio Websites',
                'Booking Systems'
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-5 text-center"
                >
                  <span className="font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Proficiency Bars */}
          <div
            className="glass-card p-8 mb-16 fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical <span className="gradient-text">Proficiency</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proficiencies.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span style={{ color: 'rgba(241,245,249,0.90)' }}>{skill.name}</span>
                    <span style={{ color: '#2dd4bf' }}>{skill.level}%</span>
                  </div>
                  <div
                    className="w-full rounded-full h-2.5 overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${bars[i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="glass-card p-8 mb-16 fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Currently <span className="gradient-text">Learning</span>
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Advanced NestJS',
                'TypeScript',
                'Docker',
                'System Design'
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(45,212,191,0.08)',
                    border: '1px solid rgba(45,212,191,0.20)',
                    color: '#2dd4bf'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Banner */}
          <div
            className="rounded-2xl p-10 text-center fade-up"
            style={{
              background: 'linear-gradient(135deg, rgba(45,212,191,0.10), rgba(129,140,248,0.10))',
              border: '1px solid rgba(45,212,191,0.20)',
              backdropFilter: 'blur(20px)',
              animationDelay: '0.6s',
            }}
          >
            <h3 className="text-2xl font-bold mb-8">
              Let's Build Your Next Project
            </h3>
            <p
              className="max-w-2xl mx-auto mb-8"
              style={{ color: 'rgba(148,163,184,0.75)' }}
            >
              Whether you need a business website,
              dashboard, booking platform or complete
              full-stack solution, I'm ready to help
              bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: '10+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '15+', label: 'Technological Skills' },
                { value: 'End-To-End', label: 'Development' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="px-8 py-5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm" style={{ color: 'rgba(148,163,184,0.70)' }}>{stat.label}</div>

                </div>

              ))}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                  href="/contact"
                  className="btn-glass-primary px-8 py-3 rounded-xl font-bold"
                >
                  Contact Me
                </a>

                <a
                  href="/resume"
                  className="glass-card px-8 py-3 rounded-xl font-bold"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>

        </div>
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

        <Footer />
      </div>
    </>
  );
};

export default Skills;