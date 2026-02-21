import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { num: '01.', label: 'About', to: '/' },
  { num: '02.', label: 'Experience', to: '/Experience' },
  { num: '03.', label: 'Skills', to: '/Skills' },
  { num: '04.', label: 'Contact', to: '/Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <header
        style={{
          background: scrolled
            ? 'rgba(3, 7, 18, 0.85)'
            : 'rgba(3, 7, 18, 0.40)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled
            ? '1px solid rgba(45, 212, 191, 0.15)'
            : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.40)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4"
      >
        {/* Logo */}
        <Link to="/" className="relative group flex-shrink-0">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'rgba(45, 212, 191, 0.10)',
              border: '1.5px solid rgba(45, 212, 191, 0.50)',
              boxShadow: '0 0 20px rgba(45,212,191,0.15)',
              color: '#2dd4bf',
            }}
          >
            T
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: '0 0 24px rgba(45,212,191,0.40)' }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ num, label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: active ? 'rgba(45,212,191,0.10)' : 'transparent',
                  border: active ? '1px solid rgba(45,212,191,0.25)' : '1px solid transparent',
                  color: active ? '#2dd4bf' : 'rgba(241,245,249,0.75)',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#f1f5f9';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(241,245,249,0.75)';
                  }
                }}
              >
                <span style={{ color: '#2dd4bf', fontSize: '0.75rem' }}>{num}</span>
                {label}
              </Link>
            );
          })}

          <Link
            to="/Resume"
            className="ml-3 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300"
            style={{
              background: location.pathname === '/Resume' ? 'rgba(45,212,191,0.20)' : 'rgba(45,212,191,0.08)',
              border: '1px solid rgba(45,212,191,0.40)',
              color: '#2dd4bf',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(45,212,191,0.18)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(45,212,191,0.20)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(45,212,191,0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Works
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-xl transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            color: '#2dd4bf',
          }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: 'rgba(3,7,18,0.60)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col py-8 px-6 gap-6 transition-transform duration-300 ease-in-out"
        style={{
          background: 'rgba(3,7,18,0.92)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          borderRight: '1px solid rgba(45,212,191,0.15)',
          boxShadow: '8px 0 40px rgba(0,0,0,0.60)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Mobile Logo */}
        <div className="flex justify-center pt-4">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-6xl"
            style={{
              background: 'rgba(45,212,191,0.08)',
              border: '2px solid rgba(45,212,191,0.40)',
              boxShadow: '0 0 40px rgba(45,212,191,0.15)',
              color: '#2dd4bf',
            }}
          >
            T
          </div>
        </div>

        <div className="glass-divider" />

        {/* Mobile Links */}
        <nav className="flex flex-col gap-2">
          {navLinks.map(({ num, label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: active ? 'rgba(45,212,191,0.12)' : 'rgba(255,255,255,0.03)',
                  border: active ? '1px solid rgba(45,212,191,0.30)' : '1px solid rgba(255,255,255,0.06)',
                  color: active ? '#2dd4bf' : 'rgba(241,245,249,0.80)',
                }}
              >
                <span style={{ color: '#2dd4bf', fontSize: '0.75rem', minWidth: '28px' }}>{num}</span>
                {label}
              </Link>
            );
          })}
          <Link
            to="/Resume"
            className="flex items-center justify-center px-4 py-3 rounded-xl font-bold mt-2 transition-all duration-300"
            style={{
              background: 'rgba(45,212,191,0.10)',
              border: '1px solid rgba(45,212,191,0.40)',
              color: '#2dd4bf',
            }}
          >
            Works
          </Link>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
};

export default Header;