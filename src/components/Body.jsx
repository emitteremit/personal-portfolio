import React from 'react';
import { ArrowRight, Code, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Body = () => {
  const stats = [
    { icon: <Code size={24} />, value: '3+', label: 'Years Experience' },
    { icon: <Sparkles size={24} />, value: '10+', label: 'Projects Delivered' },
    { icon: <TrendingUp size={24} />, value: '20%', label: 'User Engagement' }
  ];

  return (
    <>
      <main className="bg-black text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-teal-400"></div>
              <p className="text-teal-400 text-lg font-semibold tracking-wide">
                Hi, my name is
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Omodele Temitope
              <span className="text-teal-400">.</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold mb-6 leading-snug">
              I drive digital growth through{' '}
              <span className="text-teal-400 relative">
                innovative
                <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-400/30"></div>
              </span>{' '}
              front-end solutions.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              As a results-driven front-end developer with 3+ years of experience, I have
              successfully delivered over <span className='text-teal-400 font-semibold'>10+ projects</span>, driving a{' '}
              <span className="text-teal-400 font-semibold">20% increase in user engagement</span> and a{' '}
              <span className="text-teal-400 font-semibold">15% boost in conversion rates</span>.
              Proficient in React, JavaScript, and CSS, I specialize in crafting scalable,
              user-centric web applications that exceed expectations.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-teal-400 transition-all duration-300 group"
                >
                  <div className="text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/Resume">
                <button className="group bg-teal-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-300 transition-all shadow-lg hover:shadow-teal-400/50 flex items-center gap-2">
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/Contact">
                <button className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-400 hover:text-black transition-all">
                  Get In Touch
                </button>
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4 font-semibold tracking-wider uppercase">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {['Vite + React.js', 'JavaScript', 'Sass', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Node.js'].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-800 hover:border-teal-400 hover:text-teal-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>
      </main>
    </>
  );
};

export default Body;