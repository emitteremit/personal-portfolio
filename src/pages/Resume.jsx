import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/imgl.png';
import img2 from '../assets/imgl2.png';
import img3 from '../assets/imgl3.png';
import img4 from '../assets/imgl4.png';
import img5 from '../assets/des.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: 'Interior Design Services Website',
    description: 'Developed a responsive interior design website using modern web technologies, showcasing stunning portfolio showcases and services. The website features detailed service descriptions, a contact form, and a seamless navigation experience, providing an immersive experience for potential clients.',
    technologies: ['HTML', 'Tailwind CSS', 'Javascript'],
    role: 'Front-end Developer',
    link: 'http://www.lindseygilleyinteriors.com/',
    image: img3,
  },
  {
    id: 2,
    title: 'Real Estate Website',
    description: 'Developed a responsive real estate website using React and Tailwind CSS, showcasing luxurious homes and properties. The website features property listings, detailed descriptions, and a contact form, providing an immersive experience for potential buyers and renters.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-end Developer',
    link: 'https://rqcharminghomes.com/',
    image: img2,
  },
  {
    id: 3,
    title: 'Apartment Website',
    description: 'Developed a responsive apartment landing page using HTML, Bootstrap, and AOS animation, showcasing luxurious living spaces and amenities. The website features floor plans, services, and a contact form, providing an immersive experience for potential residents.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    role: 'Front-end Developer',
    link: 'https://bucolic-griffin-886896.netlify.app/',
    image: img1,
  },
  {
    id: 4,
    title: 'Sensible Solutions — Interior Design Portfolio',
    description: 'Developed a responsive portfolio website for Sensible Solutions, showcasing stunning interior design projects and client testimonials. The website features a clean design, intuitive navigation, and a contact form, providing an immersive experience for potential clients.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-end Developer',
    link: 'https://itssensible.com/',
    image: img4,
  },
  {
    id: 5,
    title: 'Construction Concepts — Commercial Design & Build',
    description: 'Developed a responsive website for Construction Concepts, showcasing their commercial design and build services, including turnkey construction, construction management, architectural design, and permit expediting.',
    technologies: ['React', 'Tailwind CSS'],
    role: 'Front-end Developer',
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
                A collection of my professional work showcasing responsive web development
                and modern design implementation
              </p>
            </div>
          </div>
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
                    {/* Overlay */}
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

                    {/* Glass shimmer border on hover */}
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
              Interested in Working <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(148,163,184,0.80)' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
            <Link to="/Contact">
              <button className="btn-glass-primary px-8 py-4 rounded-xl font-bold text-base">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
