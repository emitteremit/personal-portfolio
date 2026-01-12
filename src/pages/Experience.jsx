import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Award, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      title: 'Front-end Developer',
      company: 'Freelance',
      type: 'Self-Taught',
      period: 'Jan 2022 - Present',
      duration: '3+ Years',
      location: 'Remote',
      responsibilities: [
        'Designed and developed multiple web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js',
        'Implemented responsive design and ensured cross-browser compatibility across all major browsers',
        'Utilized Git and GitHub for version control and collaboration with clients',
        'Built and deployed scalable projects using Vite + React with optimized performance',
        'Managed client relationships and delivered projects on time and within scope'
      ],
      achievements: [
        'Delivered 10+ successful projects with 100% client satisfaction',
        'Increased user engagement by 20% through optimized UI/UX implementations',
        'Boosted conversion rates by 15% across multiple client projects'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'Vite', 'Bootstrap']
    },
    {
      title: 'Front-end Development Intern',
      company: 'Valuemax',
      type: 'Internship',
      period: 'Jan 2024 - Dec 2025',
      duration: '1 Year',
      location: 'Nigeria',
      responsibilities: [
        'Assisted in the development of web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js',
        'Participated in code reviews and ensured code quality following best practices',
        'Collaborated with senior developers to identify and fix bugs in production environments',
        'Contributed to team meetings and agile development processes',
        'Learned industry-standard workflows and professional development practices'
      ],
      achievements: [
        'Successfully completed assigned tasks with minimal supervision',
        'Contributed to improved code quality through active participation in reviews',
        'Gained hands-on experience with professional development workflows'
      ],
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'Agile']
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 rounded-full px-4 py-2 mb-6">
                <Briefcase size={18} className="text-teal-400" />
                <span className="text-teal-400 text-sm font-semibold">Professional Journey</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Work <span className="text-teal-400">Experience</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                3+ years of experience building modern web applications and delivering exceptional digital solutions
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-400/10 p-3 rounded-xl group-hover:bg-teal-400/20 transition-colors">
                        <Briefcase className="text-teal-400" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                          {exp.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-lg font-semibold text-gray-300">{exp.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                          <span className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={16} className="text-teal-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <TrendingUp size={16} className="text-teal-400" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-teal-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                    <Code size={18} />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                    <Award size={18} />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-black text-gray-300 px-4 py-2 rounded-lg text-sm border border-gray-800 hover:border-teal-400 hover:text-teal-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-teal-400 to-teal-500/10 rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-black mb-10 text-center">
              Career Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-black mb-2">3+</div>
                <div className="text-black/80 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-black mb-2">10+</div>
                <div className="text-black/80 font-semibold">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-black mb-2">10+</div>
                <div className="text-black/80 font-semibold">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-black/80 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Interested in collaborating or learning more about my experience? I'd love to hear from you.
            </p>
            <Link to="/Contact">
              <button className="bg-teal-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-300 transition-all shadow-lg hover:shadow-teal-400/50 inline-flex items-center gap-2">
                Get In Touch
                <Briefcase size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;