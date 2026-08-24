import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/imgl.png';
import img2 from '../assets/imgl2.png';
import img3 from '../assets/imgl3.png';
import img4 from '../assets/imgl4.png';
import img5 from '../assets/des.png';
import img6 from '../assets/ecommerce.png'
import img7 from '../assets/church.png'
import img8 from '../assets/staff.png'
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: "LL Staffing Solutions Healthcare Staffing Platform",
    description:
      "Built a complete full-stack web application for a U.S.-based healthcare staffing agency. The frontend includes 10+ pages Homepage, About, Services, Jobs, Job Details, Application Flow, and a 4-step Appointment Booking system all built with React and Vite. On the backend, I designed and implemented a secure REST API using Node.js and Express, connected to MongoDB for storing job listings, applications, and appointment data. Integrated EmailJS for automated contact form submissions and set up an Admin Panel with full CRUD functionality for managing jobs and appointments. Deployed the frontend on Vercel and the backend on Render, with environment-based config for production.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "EmailJS"],
    role: "Full-Stack Developer",
    link: "https://llstaffingsolution.com/",
    image: img8,
  },
  {
    id: 2,
    title: "Ibadan North Diocese Church Admin Panel",
    description:
      "Developed a full-stack church management web application for the Ibadan North Anglican Diocese. The platform features secure admin authentication with protected routes, a dynamic dashboard showing an overview of church activity, and complete CRUD functionality for managing church events, announcements, and news posts. Built the frontend with React and TypeScript for type safety, and the backend with Node.js and MongoDB for flexible data management. Admins can create, edit, publish, and delete content directly from the dashboard without touching any code.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    role: "Full-Stack Developer",
    link: "https://ibadannorthanglicandiocese.org/",
    image: img7,
  },
  {
    id: 3,
    title: 'QUENX Fashion E-Commerce Storefront',
    description:
      'Designed and developed a premium fashion e-commerce storefront from scratch with a fully custom UI. The store features a dynamic product catalog with category filtering, an interactive shopping cart with real-time quantity and price updates, and a smooth checkout flow optimized for conversions. Built entirely with React and Tailwind CSS, with a strong focus on visual aesthetics bold typography, clean grid layouts, and hover micro-interactions that give the brand a high-end feel. Fully responsive across all screen sizes.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    role: 'Front-End Developer',
    link: 'https://ecommerce-wv12.vercel.app/',
    image: img6,
  },
  {
    id: 4,
    title: 'Lindsey Gilley Interiors Interior Design Website',
    description:
      'Built a responsive, visually rich website for a professional interior design studio. The site showcases the designer\'s portfolio through a curated gallery section, detailed service descriptions covering residential and commercial projects, and a fully functional contact form for client inquiries. Focused heavily on visual presentation clean whitespace, elegant typography, and smooth scroll behavior to reflect the luxury feel of the brand. Built with HTML, Tailwind CSS, and vanilla JavaScript, with AOS animations for scroll-triggered reveals.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    role: 'Front-End Developer',
    link: 'http://www.lindseygilleyinteriors.com/',
    image: img3,
  },
  {
    id: 5,
    title: 'RQ Charming Homes Real Estate Website',
    description:
      'Developed a fully responsive real estate website for a property listings business. The site features a searchable property catalog with detailed listing pages including high-quality image galleries, property specs, pricing, and location info. Includes a contact form for booking viewings and a clean, professional layout designed to build trust with potential buyers and renters. Built with React and Tailwind CSS, with component-based architecture for easy property data management and fast page rendering.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-End Developer',
    link: 'https://rqcharminghomes.com/',
    image: img2,
  },
  {
    id: 6,
    title: 'Luxury Apartments Property Landing Page',
    description:
      'Developed a high-converting apartment landing page designed to showcase luxury living spaces and drive lead generation. The page features an interactive floor plans section, detailed amenities breakdown, resident testimonials, and a contact/inquiry form. Used Bootstrap for responsive grid layout and AOS (Animate on Scroll) for smooth entrance animations that keep visitors engaged as they scroll. Clean visual hierarchy and strategic CTAs guide potential residents toward booking a viewing.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'AOS'],
    role: 'Front-End Developer',
    link: 'https://bucolic-griffin-886896.netlify.app/',
    image: img1,
  },
  {
    id: 7,
    title: 'Sensible Solutions Interior Design Portfolio',
    description:
      'Built a polished portfolio website for Sensible Solutions, an interior design firm, to showcase their project work and attract new clients. The site features a project gallery with before-and-after transformations, a services section detailing their design process, client testimonials, and a contact form. Designed with a clean, minimal aesthetic that lets the design work speak for itself neutral color palette, generous whitespace, and smooth transitions. Built with React and Tailwind CSS, fully responsive across desktop and mobile.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-End Developer',
    link: 'https://itssensible.com/',
    image: img4,
  },
  {
    id: 8,
    title: 'Construction Concepts Commercial Design & Build',
    description:
      'Developed a professional website for Construction Concepts, a Houston-based commercial construction firm. The site clearly presents their core services turnkey construction, construction management, architectural design, and permit expediting with dedicated sections for each service area. Includes a project showcase, company overview, and a contact section for client inquiries and project consultations. Built with React and Tailwind CSS, with a bold, industrial aesthetic that matches the firm\'s brand. Fully responsive and optimized for fast load times.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-End Developer',
    link: 'http://buildithouston.com',
    image: img5,
  },
];

const Resume = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'transparent' }}>
      <Header />

      <div className="relative z-10">
        {/* Hero */}
        <div
          className="relative"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-4 fade-up">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{
                  background: 'rgba(45,212,191,0.08)',
                  border: '1px solid rgba(45,212,191,0.25)',
                  backdropFilter: 'blur(12px)',
                  color: '#2dd4bf',
                }}
              >
                <span className="pulse-dot" />
                Portfolio Showcase
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                Featured{' '}
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(148,163,184,0.80)' }}>
                A showcase of websites, dashboards, admin panels,
                healthcare platforms, e-commerce stores and business
                solutions built for real clients and businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-4 mb-20 fade-up">
          {[
            { value: '8+', label: 'Projects' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '3+', label: 'Years Experience' },
            { value: 'Full-Stack', label: 'Developer' }
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card p-5  text-center"
            >
              <div className="text-2xl font-bold gradient-text">
                {item.value}
              </div>

              <div
                className="text-sm mt-1"
                style={{ color: 'rgba(148,163,184,0.7)' }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-28">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center fade-up`}
                style={{ animationDelay: `${index * 0.10}s` }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div
                    className="text-sm font-bold mb-3"
                    style={{ color: '#2dd4bf' }}
                  >
                    PROJECT 0{project.id}
                  </div>
                  <div
                    className="relative group overflow-hidden rounded-2xl"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 25px 60px rgba(0,0,0,0.50)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'linear-gradient(to top, rgba(3,7,18,0.90) 0%, rgba(3,7,18,0.50) 50%, transparent 100%)' }}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass-primary flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                      >
                        View Live Site <ExternalLink size={16} />
                      </a>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(45,212,191,0.30)' }}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ background: 'rgba(45,212,191,0.10)', border: '1px solid rgba(45,212,191,0.20)' }}
                      >
                        <Code style={{ color: '#2dd4bf' }} size={18} />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2dd4bf' }}>
                        {project.role}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="glass-chip">
                        Full Stack
                      </span>

                      <span className="glass-chip">
                        Production Ready
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{project.title}</h2>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(148,163,184,0.85)' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech */}
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(148,163,184,0.50)' }}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="glass-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {/* <div className="mt-6">
                    <h3
                      className="text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: 'rgba(148,163,184,0.50)' }}
                    >
                      Key Features
                    </h3>

                    <ul className="space-y-2">
                      {project.results.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2"
                        >
                          <span className="text-green-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div
            className="rounded-2xl p-12 text-center fade-up"
            style={{
              background: 'linear-gradient(135deg, rgba(45,212,191,0.08), rgba(129,140,248,0.08))',
              border: '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Website That Delivers Results?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(148,163,184,0.80)' }}>
              Whether you're launching a startup,
              growing a business, or modernizing an
              existing platform, let's build something exceptional.
            </p>
            <a
              href="https://wa.me/2348144331503"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="glass-card px-8 py-4 rounded-xl font-bold"
              >
                WhatsApp Me
              </button>
            </a>
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
  );
};

export default Resume;