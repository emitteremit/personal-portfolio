import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import Footer from '../Footer';
import Header from '../Header';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
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
      const subject = 'Message from Portfolio Website';
      const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
      const mailtoUrl = `mailto:omodeletemitope12@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_self');

      setForm({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'omodeletemitope12@gmail.com',
      link: 'mailto:omodeletemitope12@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+234 8144331503',
      link: 'tel:+2348144331503'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Oyo State, Nigeria',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={28} />,
      label: 'LinkedIn',
      link: '#'
    },
    {
      icon: <Github size={28} />,
      label: 'GitHub',
      link: 'https://github.com/emitteremit'
    },
    {
      icon: <Twitter size={28} />,
      label: 'Twitter',
      link: 'https://x.com/Emmiter001?t=bJNnYymgOw6HuRgTSicLnw&s=09'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-teal-400 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just wantx to say hello? I'd love to hear from you.
              Feel free to reach out for any questions or opportunities.
            </p>
            <div className="mt-6 h-1 w-24 bg-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-teal-400 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-blue-800/30 border border-blue-700 rounded-lg p-4 hover:border-teal-400 transition-colors"
                  >
                    <div className="text-teal-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-teal-400 font-semibold mb-1">{info.label}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-teal-400 mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800/30 border-2 border-blue-700 p-3 rounded-lg text-teal-400 hover:border-teal-400 hover:bg-blue-800/50 transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-800/30 border-2 border-blue-700 rounded-xl p-8 hover:border-teal-400 transition-colors">
              <h2 className="text-3xl font-bold text-teal-400 mb-6">
                Send Me a Message
              </h2>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                    Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full p-4 bg-blue-900 border-2 ${errors.nameError ? 'border-red-500' : 'border-blue-700'
                      } rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors`}
                  />
                  {errors.nameError && (
                    <p className="text-red-400 text-sm mt-1">{errors.nameError}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                    Email <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full p-4 bg-blue-900 border-2 ${errors.emailError ? 'border-red-500' : 'border-blue-700'
                      } rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors`}
                  />
                  {errors.emailError && (
                    <p className="text-red-400 text-sm mt-1">{errors.emailError}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                    Message <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={`w-full p-4 bg-blue-900 border-2 ${errors.messageError ? 'border-red-500' : 'border-blue-700'
                      } rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors resize-none`}
                  ></textarea>
                  {errors.messageError && (
                    <p className="text-red-400 text-sm mt-1">{errors.messageError}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-teal-400 text-blue-900 font-bold py-4 px-6 rounded-lg hover:bg-teal-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-teal-400/50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-blue-900 text-lg max-w-2xl mx-auto">
              Whether you have a question, a project idea, or just want to connect,
              I'm here and ready to help bring your vision to life.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;