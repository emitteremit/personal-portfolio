import React from 'react';
import { Code2, GitBranch, Lightbulb, Palette, Database, Wrench } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Languages & Frameworks',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'SASS', 'Bootstrap', 'Tailwind CSS'],
      color: 'teal'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'Collaboration', 'Code Review'],
      color: 'teal'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design & UI/UX',
      skills: ['Responsive Web Design', 'Cross-browser Compatibility', 'Web Accessibility', 'Modern UI Design'],
      color: 'teal'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Development Tools',
      skills: ['VS Code', 'Chrome DevTools', 'Testing & Debugging', 'Performance Optimization'],
      color: 'teal'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Communication'],
      color: 'teal'
    },
    {
      icon: <Database size={32} />,
      title: 'Additional Skills',
      skills: ['RESTful APIs', 'JSON', 'Component Architecture', 'State Management'],
      color: 'teal'
    }
  ];

  return (
    <>
      <Header/>
    <div className="min-h-screen bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-teal-400 mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
          <div className="mt-6 h-1 w-24 bg-teal-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-blue-800/30 border-2 border-blue-700 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/20 hover:-translate-y-2"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-400">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-blue-900 text-lg mb-8 max-w-2xl mx-auto">
            With a strong foundation in modern web technologies and a passion for creating 
            exceptional user experiences, I'm ready to bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-900 text-teal-400 px-8 py-4 rounded-lg font-bold">
              <div className="text-3xl mb-1">5+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="bg-blue-900 text-teal-400 px-8 py-4 rounded-lg font-bold">
              <div className="text-3xl mb-1">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-blue-900 text-teal-400 px-8 py-4 rounded-lg font-bold">
              <div className="text-3xl mb-1">10+</div>
              <div className="text-sm">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Proficiency Bars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center">
          Technical Proficiency
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'HTML/CSS', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'React.js', level: 88 },
            { name: 'Tailwind CSS', level: 92 },
            { name: 'Responsive Design', level: 95 },
            { name: 'Git/GitHub', level: 85 }
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-gray-300">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-blue-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-400 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
          </>
  );
};

export default Skills;