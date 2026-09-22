import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../assets/imgl.png';
import img2 from '../assets/imgl2.png';
import img3 from '../assets/imgl3.png';
import img4 from '../assets/imgl4.png';
import img5 from '../assets/des.png';
import img6 from '../assets/ecommerce.png';
import img7 from '../assets/church.png';
import img8 from '../assets/staff.png';
import img9 from '../assets/tlc.png';

const projects = [
  {
    id: 1,
    title: 'LL Staffing Solutions Healthcare Staffing Platform',
    description:
      'Built a complete full-stack web application for a U.S.-based healthcare staffing agency. The frontend includes 10+ pages including Homepage, About, Services, Jobs, Job Details, Application Flow, and a 4-step Appointment Booking system built with React and Vite. On the backend, I designed and implemented a REST API using Node.js and Express, connected to MongoDB for storing job listings, applications, and appointment data. Integrated EmailJS for automated contact form submissions and built an Admin Panel with CRUD functionality for managing jobs and appointments. Deployed the frontend on Vercel and the backend on Render with environment-based configuration for production.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'EmailJS',
    ],
    role: 'Full-Stack Developer',
    type: 'Full-Stack',
    featured: true,
    link: 'https://llstaffingsolution.com/',
    image: img8,
  },
  {
    id: 2,
    title: 'TLC Assist Living - US-Based Homecare Staffing Platform',
    description:
      'Developed a comprehensive web application for a U.S.-based home care staffing and healthcare services company. The project includes 10+ optimized pages with a professional appointment booking system, job career portal, blog/resources section, and employee application workflow. Implemented secure file uploads using Cloudinary for job applications and resumes. Automated customer communications with EmailJS including appointment confirmations, application updates, and survey responses. Designed and built the interface using React, Vite, and Tailwind CSS with smooth animations, responsive layouts, sticky call-to-action elements, downloadable company brochure, and customer feedback functionality. Deployed on Vercel with production-ready optimizations.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'EmailJS',
      'Cloudinary',
      'Vercel',
    ],
    role: 'Full-Stack Developer',
    type: 'Full-Stack',
    featured: true,
    client: 'U.S.-Based Healthcare Staffing Company',
    link: 'https://tlcassistliving.com/',
    image: img9,
  },
  {
    id: 3,
    title: 'Ibadan North Diocese Church Admin Panel',
    description:
      'Developed a full-stack church management web application for the Ibadan North Anglican Diocese. The platform features secure admin authentication with protected routes, a dynamic dashboard showing an overview of church activity, and complete CRUD functionality for managing church events, announcements, and news posts. Built the frontend with React and TypeScript for type safety, with Node.js and MongoDB powering the backend and data management. Administrators can create, edit, publish, and delete content directly from the dashboard without touching any code.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
    ],
    role: 'Full-Stack Developer',
    type: 'Full-Stack',
    featured: true,
    link: 'https://ibadannorthanglicandiocese.org/',
    image: img7,
  },
  {
    id: 4,
    title: 'QUENX Fashion E-Commerce Storefront',
    description:
      'Designed and developed a premium fashion e-commerce storefront from scratch with a fully custom UI. The store features a dynamic product catalog with category filtering, an interactive shopping cart with real-time quantity and price updates, and a smooth checkout flow optimized for conversions. Built entirely with React and Tailwind CSS, with a strong focus on visual aesthetics, bold typography, clean grid layouts, and hover micro-interactions. Fully responsive across all screen sizes.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    role: 'Front-End Developer',
    type: 'Frontend',
    link: 'https://ecommerce-wv12.vercel.app/',
    image: img6,
  },
  {
    id: 5,
    title: 'Lindsey Gilley Interiors Interior Design Website',
    description:
      "Built a responsive, visually rich website for a professional interior design studio. The site showcases the designer's portfolio through a curated gallery section, detailed service descriptions covering residential and commercial projects, and a functional contact form for client inquiries. Focused heavily on visual presentation, clean whitespace, elegant typography, and smooth scroll behavior to reflect the luxury feel of the brand. Built with HTML, Tailwind CSS, and vanilla JavaScript with AOS animations for scroll-triggered reveals.",
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    role: 'Front-End Developer',
    type: 'Frontend',
    link: 'http://www.lindseygilleyinteriors.com/',
    image: img3,
  },
  {
    id: 6,
    title: 'RQ Charming Homes Real Estate Website',
    description:
      'Developed a fully responsive real estate website for a property listings business. The site features a searchable property catalog with detailed listing pages including image galleries, property specifications, pricing, and location information. Includes a contact form for booking viewings and a clean professional layout designed to build trust with potential buyers and renters. Built with React and Tailwind CSS using component-based architecture for efficient property data management.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-End Developer',
    type: 'Frontend',
    link: 'https://rqcharminghomes.com/',
    image: img2,
  },
  {
    id: 7,
    title: 'Luxury Apartments Property Landing Page',
    description:
      'Developed a high-converting apartment landing page designed to showcase luxury living spaces and drive lead generation. The page features an interactive floor plans section, detailed amenities breakdown, resident testimonials, and a contact/inquiry form. Used Bootstrap for responsive layouts and AOS for smooth entrance animations. Clean visual hierarchy and strategic calls-to-action guide potential residents toward booking a viewing.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'AOS'],
    role: 'Front-End Developer',
    type: 'Frontend',
    link: 'https://bucolic-griffin-886896.netlify.app/',
    image: img1,
  },
  {
    id: 8,
    title: 'Sensible Solutions Interior Design Portfolio',
    description:
      'Built a polished portfolio website for Sensible Solutions, an interior design firm, to showcase their project work and attract new clients. The site features a project gallery with before-and-after transformations, a services section detailing their design process, client testimonials, and a contact form. Designed with a clean minimal aesthetic that lets the design work speak for itself, using generous whitespace, smooth transitions, and responsive layouts.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-End Developer',
    type: 'Frontend',
    link: 'https://itssensible.com/',
    image: img4,
  },
  {
    id: 9,
    title: 'Construction Concepts Commercial Design & Build',
    description:
      "Developed a professional website for Construction Concepts, a Houston-based commercial construction firm. The site clearly presents their core services including turnkey construction, construction management, architectural design, and permit expediting. Includes a project showcase, company overview, and contact section for client inquiries and project consultations. Built with React and Tailwind CSS with a bold industrial aesthetic and responsive layout.",
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-End Developer',
    type: 'Frontend',
    link: 'http://buildithouston.com',
    image: img5,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-10 items-center fade-up`}
      style={{ animationDelay: `${index * 0.10}s` }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div
          className="text-sm font-bold mb-3"
          style={{ color: '#2dd4bf' }}
        >
          PROJECT {String(project.id).padStart(2, '0')}
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

          {/* Hover Overlay */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{
              background:
                'linear-gradient(to top, rgba(3,7,18,0.90) 0%, rgba(3,7,18,0.50) 50%, transparent 100%)',
            }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-primary flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            >
              View Live Site
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Border Glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow:
                'inset 0 0 0 1px rgba(45,212,191,0.30)',
            }}
          />
        </div>
      </div>

      {/* Details */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          {/* Role */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="p-2 rounded-lg"
              style={{
                background: 'rgba(45,212,191,0.10)',
                border: '1px solid rgba(45,212,191,0.20)',
              }}
            >
              <Code
                style={{ color: '#2dd4bf' }}
                size={18}
              />
            </div>

            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: '#2dd4bf' }}
            >
              {project.role}
            </span>
          </div>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mt-4 mb-4">
            <span className="glass-chip">
              {project.type}
            </span>

            {project.featured && (
              <span className="glass-chip">
                Featured Project
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <p
            className="text-base leading-relaxed"
            style={{
              color: 'rgba(148,163,184,0.85)',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h3
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{
              color: 'rgba(148,163,184,0.50)',
            }}
          >
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="glass-chip"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Project */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
        >
          View Project
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <Header />

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section
          className="relative"
          style={{
            borderBottom:
              '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-4 fade-up">

              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mt-[50px]"
                style={{
                  background:
                    'rgba(45,212,191,0.08)',
                  border:
                    '1px solid rgba(45,212,191,0.25)',
                  backdropFilter: 'blur(12px)',
                  color: '#2dd4bf',
                }}
              >
                <span className="pulse-dot" />
                Portfolio Showcase
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                Featured{' '}
                <span className="gradient-text">
                  Projects
                </span>
              </h1>

              <p
                className="text-lg max-w-2xl mx-auto leading-relaxed"
                style={{
                  color:
                    'rgba(148,163,184,0.80)',
                }}
              >
                A selection of websites, full-stack
                applications, dashboards, e-commerce
                platforms and business systems built
                using modern web technologies.
              </p>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-4 mb-20 fade-up">
            {[
              {
                value: '9+',
                label: 'Featured Projects',
              },
              {
                value: '3+',
                label: 'Years Experience',
              },
              {
                value: '15+',
                label: 'Technologies Used',
              },
              {
                value: 'Full-Stack',
                label: 'Developer',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-5 text-center"
              >
                <div className="text-2xl font-bold gradient-text">
                  {item.value}
                </div>

                <div
                  className="text-sm mt-1"
                  style={{
                    color:
                      'rgba(148,163,184,0.7)',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FEATURED PROJECTS ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="mb-14 fade-up">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-3"
              style={{ color: '#2dd4bf' }}
            >
              Selected Work
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured{' '}
              <span className="gradient-text">
                Projects
              </span>
            </h2>

            <p
              className="max-w-2xl mt-4 leading-relaxed"
              style={{
                color:
                  'rgba(148,163,184,0.75)',
              }}
            >
              These projects demonstrate my experience
              building complete web solutions, from
              responsive interfaces to backend APIs,
              databases and administrative systems.
            </p>
          </div>

          <div className="space-y-28">
            {featuredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}
          </div>
        </section>

        {/* ================= OTHER PROJECTS ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          <div className="mb-14 fade-up">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-3"
              style={{ color: '#2dd4bf' }}
            >
              More Work
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Other{' '}
              <span className="gradient-text">
                Projects
              </span>
            </h2>

            <p
              className="max-w-2xl mt-4 leading-relaxed"
              style={{
                color:
                  'rgba(148,163,184,0.75)',
              }}
            >
              Additional websites and interfaces
              demonstrating experience across different
              industries, technologies and design styles.
            </p>
          </div>

          <div className="space-y-28">
            {otherProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div
            className="rounded-2xl p-12 text-center fade-up"
            style={{
              background:
                'linear-gradient(135deg, rgba(45,212,191,0.08), rgba(129,140,248,0.08))',
              border:
                '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Website That Delivers Results?
            </h2>

            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{
                color:
                  'rgba(148,163,184,0.80)',
              }}
            >
              Whether you're launching a startup,
              growing a business, or modernizing an
              existing platform, let's build something
              exceptional.
            </p>

            <a
              href="https://wa.me/2348144331503"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card inline-flex px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1"
            >
              WhatsApp Me
            </a>
          </div>
        </section>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/2348144331503"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999] group"
      >
        <div
          className="
            relative
            w-14 h-14
            rounded-full
            flex items-center justify-center
            shadow-2xl
            transition-all
            duration-300
            hover:scale-110
          "
          style={{
            background: '#25D366',
          }}
        >
          {/* WhatsApp SVG */}
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
            aria-hidden="true"
          >
            <path d="M19.11 17.2c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.11 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32z" />
            <path d="M16.02 4.01c-6.62 0-12 5.38-12 12 0 2.12.56 4.11 1.53 5.83L4 28l6.32-1.51A11.94 11.94 0 0 0 16.02 28c6.62 0 12-5.38 12-12s-5.38-11.99-12-11.99zm0 21.97c-1.99 0-3.83-.59-5.38-1.61l-.38-.23-3.75.9.91-3.65-.25-.39a9.95 9.95 0 1 1 8.85 4.98z" />
          </svg>

          {/* Tooltip */}
          <span
            className="
              absolute
              right-16
              top-1/2
              -translate-y-1/2
              whitespace-nowrap
              px-3
              py-2
              rounded-lg
              text-xs
              font-semibold
              opacity-0
              pointer-events-none
              group-hover:opacity-100
              transition-opacity
              duration-200
            "
            style={{
              background:
                'rgba(15,23,42,0.95)',
              border:
                '1px solid rgba(255,255,255,0.10)',
              color: 'white',
              boxShadow:
                '0 10px 30px rgba(0,0,0,0.35)',
            }}
          >
            Chat on WhatsApp
          </span>
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default Projects;