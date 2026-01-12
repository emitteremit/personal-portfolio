import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageSquare, User, AtSign, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
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
    const addError = {};
    if (!form.name.trim()) {
      addError.nameError = 'Name is required';
    }
    if (!form.email.trim()) {
      addError.emailError = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      addError.emailError = 'Invalid email address';
    }
    if (!form.message.trim()) {
      addError.messageError = 'Message is required';
    }
    return addError;
  };

  const handleSubmit = () => {
    const check = validate();
    if (Object.keys(check).length > 0) {
      setErrors(check);
    } else {
      setIsSubmitting(true);
      const subject = 'New Contact Form Submission - Portfolio';
      const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
      const mailtoUrl = `mailto:omodeletemitope12@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_self');

      setTimeout(() => {
        setForm({
          name: '',
          email: '',
          message: ''
        });
        setErrors({});
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'omodeletemitope12@gmail.com',
      link: 'mailto:omodeletemitope12@gmail.com',
      description: 'Professional inquiries welcome'
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+234 814 433 1503',
      link: 'tel:+2348144331503',
      description: 'Mon-Fri, 9:00 AM - 6:00 PM WAT'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Oyo State, Nigeria',
      link: null,
      description: 'Available for remote collaboration'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      link: '#',
      username: '@temitope',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      link: 'https://github.com/emitteremit',
      username: '@emitteremit',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Twitter size={22} />,
      label: 'Twitter',
      link: 'https://x.com/Emmiter001?t=bJNnYymgOw6HuRgTSicLnw&s=09',
      username: '@Emmiter001',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="relative border-b border-gray-800/50">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-400/10 backdrop-blur-sm border border-teal-400/30 rounded-full px-5 py-2.5">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-teal-400 text-sm font-semibold tracking-wide">Available for Projects</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Let's Work{' '}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hello, I'll do my best to get back to you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">
                  Contact Information
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Feel free to reach out through any of these channels. I typically respond within 24-48 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-5 hover:border-teal-400/50 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-teal-400/10 to-emerald-400/10 p-3 rounded-lg text-teal-400 group-hover:from-teal-400/20 group-hover:to-emerald-400/20 transition-all">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-300 mb-1">{info.label}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-teal-400 transition-colors block mb-1 font-medium truncate"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white mb-1 font-medium">{info.value}</p>
                        )}
                        <p className="text-gray-500 text-xs">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all group"
                    >
                      <div className={`text-gray-400 group-hover:scale-110 transition-all ${social.color}`}>
                        {social.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">{social.label}</p>
                        <p className="text-gray-500 text-xs truncate">{social.username}</p>
                      </div>
                      <Send size={14} className="text-gray-600 group-hover:text-teal-400 transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-gradient-to-br from-teal-400/5 to-emerald-400/5 border border-teal-400/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Quick Response Time</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      I aim to respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Send a Message
                  </h2>
                  <p className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="mb-6 bg-teal-400/10 border border-teal-400/30 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle size={20} className="text-teal-400 flex-shrink-0" />
                    <p className="text-teal-400 text-sm font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2.5 text-sm">
                      Full Name <span className="text-teal-400">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-950/50 border ${
                          errors.nameError ? 'border-red-500/50 focus:border-red-500' : 'border-gray-800/50 focus:border-teal-400/50'
                        } rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all`}
                      />
                    </div>
                    {errors.nameError && (
                      <p className="text-red-400 text-xs mt-2 flex items-center gap-1.5">
                        <span className="text-sm">⚠</span> {errors.nameError}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2.5 text-sm">
                      Email Address <span className="text-teal-400">*</span>
                    </label>
                    <div className="relative">
                      <AtSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-950/50 border ${
                          errors.emailError ? 'border-red-500/50 focus:border-red-500' : 'border-gray-800/50 focus:border-teal-400/50'
                        } rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all`}
                      />
                    </div>
                    {errors.emailError && (
                      <p className="text-red-400 text-xs mt-2 flex items-center gap-1.5">
                        <span className="text-sm">⚠</span> {errors.emailError}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2.5 text-sm">
                      Message <span className="text-teal-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-gray-500" />
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and budget..."
                        rows={6}
                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-950/50 border ${
                          errors.messageError ? 'border-red-500/50 focus:border-red-500' : 'border-gray-800/50 focus:border-teal-400/50'
                        } rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all resize-none`}
                      ></textarea>
                    </div>
                    {errors.messageError && (
                      <p className="text-red-400 text-xs mt-2 flex items-center gap-1.5">
                        <span className="text-sm">⚠</span> {errors.messageError}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-400 to-emerald-400 text-black font-semibold py-4 px-6 rounded-xl hover:from-teal-300 hover:to-emerald-300 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-400/20 hover:shadow-teal-400/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-xs text-center mt-4">
                    By submitting this form, you agree to be contacted regarding your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-400/10 via-emerald-400/10 to-teal-400/10 backdrop-blur-sm border border-teal-400/20 rounded-2xl p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-emerald-400/5 pointer-events-none"></div>
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss your ideas and turn them into reality. I'm here to help
                you create exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
