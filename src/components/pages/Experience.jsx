import React from 'react';
import { Briefcase, Calendar, CheckCircle, Code, Rocket, Users } from 'lucide-react';
import Footer from '../Footer';
import Header from '../Header';

const Experience = () => {
  const experiences = [
    {
      title: 'Front-end Developer',
      company: 'Freelance',
      type: 'Self-Taught',
      period: '2022 - Present',
      location: 'Remote',
      icon: <Rocket size={32} />,
      responsibilities: [
        'Designed and developed multiple web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js',
        'Implemented responsive design and ensured cross-browser compatibility across all major browsers',
        'Utilized Git and GitHub for version control and collaboration with clients',
        'Built and deployed scalable projects using Vite + React with optimized performance',
        'Managed client relationships and delivered projects on time and within scope'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'Vite', 'Bootstrap']
    },
    {
      title: 'Front-end Development Intern',
      company: 'Valuemax',
      type: 'Internship',
      period: '2024 - 2025',
      location: 'Nigeria',
      icon: <Users size={32} />,
      responsibilities: [
        'Assisted in the development of web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js',
        'Participated in code reviews and ensured code quality following best practices',
        'Collaborated with senior developers to identify and fix bugs in production environments',
        'Contributed to team meetings and agile development processes',
        'Learned industry-standard workflows and professional development practices'
      ],
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'Agile']
    }
  ];

  return (
  <>
    <Header/>
      <div className="min-h-screen bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-teal-400 mb-4">
              My Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A journey of continuous learning and professional growth in web development
            </p>
            <div className="mt-6 h-1 w-24 bg-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-700"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-6 h-6 rounded-full bg-teal-400 border-4 border-blue-900"></div>
                  </div>

                  <div className="md:w-1/2">
                    <div className="bg-blue-800/30 border-2 border-blue-700 rounded-xl p-8 hover:border-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/20 group">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-teal-400 group-hover:scale-110 transition-transform">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-teal-400 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-gray-300 mb-2">
                            <span className="font-semibold text-lg">{exp.company}</span>
                            <span className="text-teal-400">•</span>
                            <span className="text-sm bg-blue-700/50 px-3 py-1 rounded-full">
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                            <span className="text-teal-400">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                          <Briefcase size={18} />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <CheckCircle size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                          <Code size={18} />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-blue-700 hover:border-teal-400 hover:text-teal-400 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Professional Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">3+</div>
                <div className="text-blue-900 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">5+</div>
                <div className="text-blue-900 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
                <div className="text-blue-900 font-semibold">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                <div className="text-blue-900 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-6">
              Interested in working together or learning more about my experience?
            </p>
            <a href="/Contact">
              <button className="bg-teal-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-300 transition-colors shadow-lg hover:shadow-teal-400/50">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Experience;