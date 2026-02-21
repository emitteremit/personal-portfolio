import React from 'react';
import { ArrowRight, Code, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Body = () => {
  const stats = [
    { icon: <Code size={22} />, value: '3+', label: 'Years Experience' },
    { icon: <Sparkles size={22} />, value: '10+', label: 'Projects Delivered' },
    { icon: <TrendingUp size={22} />, value: '20%', label: 'User Engagement' },
  ];

  const techStack = ['Vite + React.js', 'JavaScript', 'Sass', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Node.js', 'Next.js'];

  return (
    <main className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'transparent' }}>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-24 py-24">
        <div className="max-w-5xl">

          {/* Available badge */}
          <div className="fade-up flex items-center gap-3 mb-6">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.25)',
                backdropFilter: 'blur(12px)',
                color: '#2dd4bf',
              }}
            >
              <span className="pulse-dot" />
              Available for Projects
            </div>
          </div>

          {/* Greeting line */}
          <div className="fade-up fade-up-delay-1 flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ background: 'rgba(45,212,191,0.60)' }} />
            <p className="text-base font-semibold tracking-widest uppercase" style={{ color: '#2dd4bf' }}>
              Hi, my name is
            </p>
          </div>

          {/* Name */}
          <h1 className="fade-up fade-up-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="gradient-text">Omodele Temitope</span>
            <span style={{ color: '#2dd4bf' }}>.</span>
          </h1>

          {/* Tagline */}
          <h2
            className="fade-up fade-up-delay-3 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-snug"
            style={{ color: 'rgba(241,245,249,0.85)' }}
          >
            I drive digital growth through{' '}
            <span className="relative" style={{ color: '#2dd4bf' }}>
              innovative
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                style={{ background: 'rgba(45,212,191,0.35)' }}
              />
            </span>{' '}
            front-end solutions.
          </h2>

          {/* Description */}
          <p
            className="fade-up fade-up-delay-4 text-lg leading-relaxed max-w-2xl mb-10"
            style={{ color: 'rgba(148,163,184,0.85)' }}
          >
            As a results-driven front-end developer with 3+ years of experience, I have
            successfully delivered over{' '}
            <span style={{ color: '#2dd4bf', fontWeight: 600 }}>10+ projects</span>, driving a{' '}
            <span style={{ color: '#2dd4bf', fontWeight: 600 }}>20% increase in user engagement</span>{' '}
            and a{' '}
            <span style={{ color: '#2dd4bf', fontWeight: 600 }}>15% boost in conversion rates</span>.
            Proficient in React, JavaScript, and CSS, I specialize in crafting scalable,
            user-centric web applications that exceed expectations.
          </p>

          {/* Stats */}
          <div className="fade-up fade-up-delay-5 grid grid-cols-3 gap-4 mb-10 max-w-lg">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-5 text-center group cursor-default">
                <div
                  className="flex justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#2dd4bf' }}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-xs" style={{ color: 'rgba(148,163,184,0.70)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-up flex flex-wrap gap-4 mb-14" style={{ animationDelay: '3.0s' }}>
            <Link to="/Resume">
              <button className="btn-glass-primary group flex items-center gap-2 px-8 py-4 rounded-xl text-lg">
                View My Work
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link to="/Contact">
              <button className="btn-glass-outline px-8 py-4 rounded-xl text-lg">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Tech Stack */}
          <div
            className="fade-up pt-8"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              animationDelay: '3.5s',
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(148,163,184,0.50)' }}
            >
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="glass-chip">{tech}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Body;