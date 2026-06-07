import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/Experience', label: 'Experience' },
  { path: '/Skills', label: 'Skills' },
  { path: '/Resume', label: 'Projects' },
  { path: '/Contact', label: 'Contact' },
];

const socialLinks = [
  { icon: <FaGithub />, link: 'https://github.com/emitteremit', label: 'GitHub' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/temitope-omodele-07b977404', label: 'LinkedIn' },
  { icon: <FaTwitter />, link: 'https://x.com/Emmiter001', label: 'Twitter' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/emit2113/', label: 'Instagram' },
  { icon: <FaWhatsapp />, link: 'https://wa.me/2348144331503', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="glass-footer relative z-10">
      <div className="glass-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
                style={{
                  background: 'linear-gradient(135deg, rgba(45,212,191,0.20), rgba(129,140,248,0.20))',
                  border: '1px solid rgba(45,212,191,0.30)',
                  color: '#2dd4bf',
                }}
              >
                E
              </div>
              <span className="text-lg font-bold gradient-text">Emit.dev</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(148,163,184,0.70)' }}>
              Full-Stack Developer crafting exceptional digital experiences with React, Node.js, and modern web technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon text-lg p-2.5 rounded-xl transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(148,163,184,0.50)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium flex items-center gap-1.5 transition-colors"
                    style={{ color: 'rgba(203,213,225,0.75)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(203,213,225,0.75)')}
                  >
                    {link.label}
                    <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(148,163,184,0.50)' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:omodeletemitope12@gmail.com"
                className="flex items-center gap-3 text-sm font-medium transition-colors"
                style={{ color: 'rgba(203,213,225,0.75)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(203,213,225,0.75)')}
              >
                <Mail size={14} style={{ color: '#2dd4bf', opacity: 0.70 }} />
                omodeletemitope12@gmail.com
              </a>
              <a
                href="tel:+2348144331503"
                className="flex items-center gap-3 text-sm font-medium transition-colors"
                style={{ color: 'rgba(203,213,225,0.75)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(203,213,225,0.75)')}
              >
                <Phone size={14} style={{ color: '#2dd4bf', opacity: 0.70 }} />
                +234 814 433 1503
              </a>
              <p className="text-sm" style={{ color: 'rgba(148,163,184,0.55)' }}>
                Oyo State, Nigeria
              </p>
            </div>

            <Link to="/Contact" className="inline-block mt-5">
              <button className="btn-glass-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                Start a Project
                <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>
        </div>

        <div className="glass-divider mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: 'rgba(148,163,184,0.45)' }}>
            © {new Date().getFullYear()} Emitter. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(148,163,184,0.35)' }}>
            Built with React & crafted with ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;