import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/Experience', label: 'Experience' },
  { path: '/Skills', label: 'Skills' },
  { path: '/Resume', label: 'Projects' },
  { path: '/Contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      id="main-header"
      className={`glass-nav sticky top-0 z-50 ${scrolled ? 'scrolled' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black"
            style={{
              background: 'linear-gradient(135deg, rgba(45,212,191,0.20), rgba(129,140,248,0.20))',
              border: '1px solid rgba(45,212,191,0.30)',
              color: '#2dd4bf',
            }}
          >
            E
          </div>
          <span className="text-xl font-bold gradient-text group-hover:text-glow transition-all">
            Emit.dev
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link px-4 py-2 rounded-lg inline-block ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/Contact" className="hidden md:block">
          <button className="btn-glass-primary px-6 py-2.5 rounded-xl text-sm font-bold">
            Hire Me
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-xl p-2 rounded-lg transition-colors"
          style={{ color: 'rgba(148,163,184,0.85)' }}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden mobile-menu-enter"
          style={{
            background: 'rgba(3,7,18,0.95)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link, i) => (
              <li
                key={link.path}
                className="slide-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-teal-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{
                    background:
                      location.pathname === link.path
                        ? 'rgba(45,212,191,0.08)'
                        : 'transparent',
                  }}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="slide-in pt-2"
              style={{ animationDelay: `${navLinks.length * 0.05}s` }}
            >
              <Link to="/Contact" onClick={closeMenu}>
                <button className="btn-glass-primary w-full py-3 rounded-xl text-sm font-bold">
                  Hire Me
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;