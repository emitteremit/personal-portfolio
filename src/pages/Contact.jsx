import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageSquare, User, AtSign, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'omodeletemitope12@gmail.com',
    link: 'mailto:omodeletemitope12@gmail.com',
    description: 'Professional inquiries welcome',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+234 814 433 1503',
    link: 'tel:+2348144331503',
    description: 'Mon–Fri, 9 AM – 6 PM WAT',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Oyo State, Nigeria',
    link: null,
    description: 'Available for remote collaboration',
  },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, label: 'LinkedIn', link: '#', username: '@temitope', color: 'rgba(59,130,246,0.25)' },
  { icon: <Github size={20} />, label: 'GitHub', link: 'https://github.com/emitteremit', username: '@emitteremit', color: 'rgba(139,92,246,0.25)' },
  { icon: <Twitter size={20} />, label: 'Twitter / X', link: 'https://x.com/Emmiter001?t=bJNnYymgOw6HuRgTSicLnw&s=09', username: '@Emmiter001', color: 'rgba(14,165,233,0.25)' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[`${e.target.name}Error`]) {
      setErrors({ ...errors, [`${e.target.name}Error`]: '' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.nameError = 'Name is required';
    if (!form.email.trim()) errs.emailError = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email))
      errs.emailError = 'Invalid email address';
    if (!form.message.trim()) errs.messageError = 'Message is required';
    return errs;
  };

  const handleSubmit = () => {
    const check = validate();
    if (Object.keys(check).length > 0) { setErrors(check); return; }
    setIsSubmitting(true);
    const subject = 'New Contact Form Submission - Portfolio';
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
    window.open(`mailto:omodeletemitope12@gmail.com?subject=${subject}&body=${body}`, '_self');
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden" style={{ background: 'transparent' }}>




        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">

          {/* Hero */}
          <div className="text-center mb-16 fade-up">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold mb-6"
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Let's Work{' '}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(148,163,184,0.80)' }}>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hello, I'll do my best to get back to you.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Left — Contact Info */}
            <div className="lg:col-span-1 space-y-5 fade-up fade-up-delay-1">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Contact Information</h2>
                <p className="text-sm" style={{ color: 'rgba(148,163,184,0.70)' }}>
                  Feel free to reach out through any of these channels. I typically respond within 24–48 hours.
                </p>
              </div>

              {/* Info cards */}
              {contactInfo.map((info, i) => (
                <div key={i} className="glass-card p-5 group">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(45,212,191,0.10)',
                        border: '1px solid rgba(45,212,191,0.20)',
                        color: '#2dd4bf',
                      }}
                    >
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(148,163,184,0.60)' }}>{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm font-semibold block mb-0.5 truncate transition-colors duration-200"
                          style={{ color: 'rgba(241,245,249,0.90)' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(241,245,249,0.90)'}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold mb-0.5" style={{ color: 'rgba(241,245,249,0.90)' }}>{info.value}</p>
                      )}
                      <p className="text-xs" style={{ color: 'rgba(148,163,184,0.50)' }}>{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="glass-card p-5">
                <h3 className="text-base font-bold text-white mb-4">Connect With Me</h3>
                <div className="space-y-2">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = s.color;
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                      }}
                    >
                      <div style={{ color: '#2dd4bf' }}>{s.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{s.label}</p>
                        <p className="text-xs" style={{ color: 'rgba(148,163,184,0.55)' }}>{s.username}</p>
                      </div>
                      <Send size={13} style={{ color: 'rgba(148,163,184,0.40)' }} className="group-hover:text-teal-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div
                className="p-4 rounded-xl flex items-start gap-3"
                style={{
                  background: 'rgba(45,212,191,0.05)',
                  border: '1px solid rgba(45,212,191,0.18)',
                }}
              >
                <CheckCircle size={18} style={{ color: '#2dd4bf', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Quick Response Time</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.65)' }}>
                    I aim to respond to all inquiries within 24–48 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2 fade-up fade-up-delay-2">
              <div className="glass-card p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
                <p className="text-sm mb-8" style={{ color: 'rgba(148,163,184,0.70)' }}>
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                {submitSuccess && (
                  <div
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: 'rgba(45,212,191,0.10)',
                      border: '1px solid rgba(45,212,191,0.30)',
                    }}
                  >
                    <CheckCircle size={18} style={{ color: '#2dd4bf', flexShrink: 0 }} />
                    <p className="text-sm font-medium" style={{ color: '#2dd4bf' }}>
                      Message sent! I'll get back to you soon.
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2.5" style={{ color: 'rgba(203,213,225,0.85)' }}>
                      Full Name <span style={{ color: '#2dd4bf' }}>*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(148,163,184,0.40)' }} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="glass-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm"
                        style={{
                          borderColor: errors.nameError ? 'rgba(239,68,68,0.50)' : undefined,
                        }}
                      />
                    </div>
                    {errors.nameError && (
                      <p className="text-xs mt-2 flex items-center gap-1.5" style={{ color: '#f87171' }}>
                        ⚠ {errors.nameError}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2.5" style={{ color: 'rgba(203,213,225,0.85)' }}>
                      Email Address <span style={{ color: '#2dd4bf' }}>*</span>
                    </label>
                    <div className="relative">
                      <AtSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(148,163,184,0.40)' }} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="glass-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm"
                        style={{
                          borderColor: errors.emailError ? 'rgba(239,68,68,0.50)' : undefined,
                        }}
                      />
                    </div>
                    {errors.emailError && (
                      <p className="text-xs mt-2 flex items-center gap-1.5" style={{ color: '#f87171' }}>
                        ⚠ {errors.emailError}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2.5" style={{ color: 'rgba(203,213,225,0.85)' }}>
                      Message <span style={{ color: '#2dd4bf' }}>*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-4 top-4" style={{ color: 'rgba(148,163,184,0.40)' }} />
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and budget..."
                        rows={6}
                        className="glass-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm resize-none"
                        style={{
                          borderColor: errors.messageError ? 'rgba(239,68,68,0.50)' : undefined,
                        }}
                      />
                    </div>
                    {errors.messageError && (
                      <p className="text-xs mt-2 flex items-center gap-1.5" style={{ color: '#f87171' }}>
                        ⚠ {errors.messageError}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-glass-primary w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div
                          className="w-5 h-5 rounded-full border-2 border-black/30 border-t-black animate-spin"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'rgba(148,163,184,0.40)' }}>
                    By submitting this form, you agree to be contacted regarding your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 rounded-2xl p-10 text-center fade-up"
            style={{
              background: 'linear-gradient(135deg, rgba(45,212,191,0.08), rgba(129,140,248,0.08))',
              border: '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(20px)',
              animationDelay: '0.3s',
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h3>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(148,163,184,0.75)' }}>
              Let's discuss your ideas and turn them into reality. I'm here to help you create
              exceptional digital experiences.
            </p>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
