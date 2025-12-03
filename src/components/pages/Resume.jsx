import React from 'react';
import { ExternalLink, Code} from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/imgl.png'
import img2 from '../../assets/imgl2.png'
import img3 from '../../assets/imgl3.png'
import img4 from '../../assets/imgl4.png'
import img5 from '../../assets/des.png'
import Header from '../Header';
import Footer from '../Footer';

const projects = [
  {
    id: 1,
    title: 'Apartment Website',
    description: 'Developed a responsive apartment landing page website using HTML, Bootstrap, and AOS animation, showcasing luxurious living spaces and amenities. The website features floor plans, services, and a contact form, providing an immersive experience for potential residents. With a modern design and seamless navigation, the site effectively promotes the apartment complex and encourages bookings.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'AOS Animation'],
    role: 'Front-end Developer',
    link: 'https://bucolic-griffin-886896.netlify.app/',
    image: img1,
  },
  {
    id: 2,
    title: 'Real Estate Website',
    description: 'Developed a responsive real estate website using React and Tailwind CSS, showcasing luxurious homes and properties. The website features property listings, detailed descriptions, and a contact form, providing an immersive experience for potential buyers and renters. With a modern design and seamless navigation, the site effectively promotes properties and encourages inquiries.',
    technologies: ['React', 'Tailwind CSS', 'AOS Animation'],
    role: 'Front-end Developer',
    link: 'https://rqcharminghomes.com/',
    image: img2,
  },
  {
    id: 3,
    title: 'Interior Design Services Website',
    description: 'Developed a responsive interior design website using modern web technologies, showcasing stunning portfolio showcases and services. The website features detailed service descriptions, a contact form, and a seamless navigation experience, providing an immersive experience for potential clients. With a sleek design and intuitive interface, the site effectively promotes Lindsey Gilley Interiors expertise and encourages inquiries',
    technologies: ['HTML', 'Tailwind CSS', 'Javascript'],
    role: 'Front-end Developer',
    link: 'https://www.lindseygilleyinteriors.com/services',
    image: img3,
  },
  {
    id: 4,
    title: 'Sensible Solutions - Interior Design Portfolio',
    description: 'Developed a responsive portfolio website for Sensible Solutions, showcasing stunning interior design projects and client testimonials. The website features a clean design, intuitive navigation, and a contact form, providing an immersive experience for potential clients.',
    technologies: ['React', 'Tailwind CSS', 'AOS Animation'],
    role: 'Front-end Developer',
    link: 'https://itssensible.com/',
    image: img4,
  },
  {
    id: 5,
    title: 'Construction Concepts - Commercial Design & Build',
    description: 'Developed a responsive website for Construction Concepts, showcasing their commercial design and build services, including turnkey construction, construction management, architectural design, and permit expediting. The website features a clean design, intuitive navigation, and a contact form, providing an immersive experience for potential clients.',
    technologies: ['React', 'Tailwind CSS', 'AOS Animation'],
    role: 'Front-end Developer',
    link: 'http://buildithouston.com',
    image: img5,
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      <Header/>
      <div className="bg-blue-800/50 border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-teal-400 mb-4">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of my professional work showcasing responsive web development 
              and modern design implementation
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-400 text-blue-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-300 transition-colors"
                    >
                      View Live Site <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="text-teal-400" size={24} />
                    <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-teal-400 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-teal-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-700 hover:border-teal-400 hover:text-teal-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-teal-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors shadow-lg hover:shadow-teal-400/50"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-blue-900 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>
          <Link to="/Contact">
            <button className="bg-blue-900 text-teal-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors shadow-xl">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Resume;