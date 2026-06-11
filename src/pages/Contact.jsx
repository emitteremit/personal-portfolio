import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageSquare, User, AtSign, CheckCircle, Instagram } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_lksueap';
const TEMPLATE_ID = 'template_p5tqs1b';
const PUBLIC_KEY  = 'fTOYbzk4T_L7BKCLG';

const contactInfo = [
  {
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    value: '+234 814 433 1503',
    link: 'https://wa.me/2348144331503',
    description: 'Fastest way to reach me',
  },
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
  { icon: <Linkedin size={20} />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/temitope-omodele-07b977404', username: '@Temitope', color: 'rgba(59,130,246,0.25)' },
  { icon: <Github size={20} />, label: 'GitHub', link: 'https://github.com/emitteremit', username: '@emitteremit', color: 'rgba(139,92,246,0.25)' },
  { icon: <Twitter size={20} />, label: 'Twitter / X', link: 'https://x.com/Emmiter001?t=bJNnYymgOw6HuRgTSicLnw&s=09', username: '@Emmiter001', color: 'rgba(14,165,233,0.25)' },
  { icon: <Instagram size={20} />, label: 'Instagram', link: 'https://www.instagram.com/emit2113/', username: 'Emit2113', color: 'rgba(233, 138, 14, 0.25)' },
];

const INITIAL_FORM = {
  name: '',
  email: '',
  budget: '₦200,000 - ₦500,000',
  projectType: 'Business Website',
  message: '',
};

const Contact = () => {
  const [form, setForm]               = useState(INITIAL_FORM);
  const [errors, setErrors]           = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError]   = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field on change
    if (errors[`${name}Error`]) {
      setErrors((prev) => ({ ...prev, [`${name}Error`]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.nameError    = 'Name is required';
    if (!form.email.trim())   errs.emailError   = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email))
      errs.emailError = 'Invalid email address';
    if (!form.message.trim()) errs.messageError = 'Message is required';
    return errs;
  };

  const handleSubmit = async () => {
    const check = validate();
    if (Object.keys(check).length > 0) { setErrors(check); return; }

    setIsSubmitting(true);
    setSubmitError('');

    // These keys must match the variables in your EmailJS template:
    // {{user_name}}, {{user_email}}, {{subject}}, {{message}}
    const templateParams = {
      user_name:   form.name,
      user_email:  form.email,
      subject:     `[${form.projectType}] — Budget: ${form.budget}`,
      message:     form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitError('Something went wrong. Please try again or reach out via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden mt-[70px]" style={{ background: 'transparent' }}>

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
              Start Your Next Project
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(148,163,184,0.80)' }}>
              Looking for a modern website, admin dashboard,
              healthcare platform, booking system or custom web application?
              Let's discuss your ideas and bring them to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {['Business Websites', 'Admin Dashboards', 'E-Commerce', 'Full-Stack Apps'].map((item, i) => (
              <div key={i} className="glass-card p-4 text-center">
                <span className="font-semibold">{item}</span>
              </div>
            ))}
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
                style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.18)' }}
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

                {/* Success banner */}
                {submitSuccess && (
                  <div
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(45,212,191,0.10)', border: '1px solid rgba(45,212,191,0.30)' }}
                  >
                    <CheckCircle size={18} style={{ color: '#2dd4bf', flexShrink: 0 }} />
                    <p className="text-sm font-medium" style={{ color: '#2dd4bf' }}>
                      Message sent! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error banner */}
                {submitError && (
                  <div
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.30)' }}
                  >
                    <p className="text-sm font-medium" style={{ color: '#f87171' }}>
                      ⚠ {submitError}
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
                        style={{ borderColor: errors.nameError ? 'rgba(239,68,68,0.50)' : undefined }}
                      />
                    </div>
                    {errors.nameError && (
                      <p className="text-xs mt-2 flex items-center gap-1.5" style={{ color: '#f87171' }}>⚠ {errors.nameError}</p>
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
                        style={{ borderColor: errors.emailError ? 'rgba(239,68,68,0.50)' : undefined }}
                      />
                    </div>
                    {errors.emailError && (
                      <p className="text-xs mt-2 flex items-center gap-1.5" style={{ color: '#f87171' }}>⚠ {errors.emailError}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2.5" style={{ color: 'rgba(203,213,225,0.85)' }}>
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-3.5 rounded-xl text-sm"
                    >
                      <option>₦200,000 - ₦500,000</option>
                      <option>Less than ₦200,000</option>
                      <option>₦500,000 - ₦1,000,000</option>
                      <option>₦1,000,000+</option>
                    </select>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold mb-2.5" style={{ color: 'rgba(203,213,225,0.85)' }}>
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-3.5 rounded-xl text-sm"
                    >
                      <option>Business Website</option>
                      <option>E-Commerce</option>
                      <option>Admin Dashboard</option>
                      <option>Portfolio Website</option>
                      <option>Custom Web App</option>
                    </select>
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
                        style={{ borderColor: errors.messageError ? 'rgba(239,68,68,0.50)' : undefined }}
                      />
                    </div>
                    {errors.messageError && (
                      <p className="text-xs mt-2 flex items-center gap-1.5" style={{ color: '#f87171' }}>⚠ {errors.messageError}</p>
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
                        <div className="w-5 h-5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
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
              Need a Website That Helps Your Business Grow?
            </h3>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(148,163,184,0.75)' }}>
              Let's discuss your goals and create a modern,
              high-performing digital experience tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://wa.me/2348144331503"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-primary px-8 py-4 rounded-xl font-bold"
              >
                WhatsApp Me
              </a>
              <a
                href="mailto:omodeletemitope12@gmail.com"
                className="glass-card px-8 py-4 rounded-xl font-bold"
              >
                Send Email
              </a>
            </div>
          </div>

        </div>

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/2348144331503"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999]"
        >
          <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110">
            💬
          </div>
        </a>

        <Footer />
      </div>
    </>
  );
};

export default Contact;