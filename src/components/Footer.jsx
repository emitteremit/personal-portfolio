import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: <Github size={18} />, href: 'https://github.com/emitteremit', label: 'GitHub' },
    { icon: <Twitter size={18} />, href: 'https://x.com/Emmiter001?t=bJNnYymgOw6HuRgTSicLnw&s=09', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer
      className="relative mt-10 py-8 px-6"
      style={{
        background: 'rgba(3,7,18,0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(45,212,191,0.12)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.50), transparent)' }}
      />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm" style={{ color: 'rgba(148,163,184,0.70)' }}>
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">Temitope</span>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(148,163,184,0.70)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(45,212,191,0.10)';
                e.currentTarget.style.borderColor = 'rgba(45,212,191,0.35)';
                e.currentTarget.style.color = '#2dd4bf';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(45,212,191,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(148,163,184,0.70)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Made with */}
        <p className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(148,163,184,0.50)' }}>
          Built with <Heart size={12} className="text-red-400" fill="currentColor" /> & React
        </p>
      </div>
    </footer>
  );
};

export default Footer;