import React from 'react'
import Header from '../Header'

const Skills = () => {
  return (
    <>
      <Header/>
      <section className="md:mx-[100px] mx-[50px]">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">My Skills</h2>
        <h3 className="text-xl font-bold mb-4 text-teal-400">Front-end Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="skill-card border  border-teal-400 p-6 rounded-md shadow-md hover:shadow-teal-400 transition-shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Languages, Libraries & Frameworks</h3>
            <ul className="list-disc pl-4 text-white">
              <li className="mb-2">HTML5</li>
              <li className="mb-2">CSS3</li>
              <li className="mb-2">SASS</li>
              <li className="mb-2">Bootstrap</li>
              <li className="mb-2">Tailwind CSS</li>
              <li className="mb-2">JavaScript</li>
              <li className="mb-2">TypeScript</li>
              <li className="mb-2">React.js</li>
              <li className="mb-2">Next.js</li>
            </ul>
          </div>
          <div className="skill-card border  border-teal-400 p-6 rounded-md shadow-md hover:shadow-teal-400 transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Version Control</h3>
            <ul className="list-disc pl-4 text-white">
              <li className="mb-2">Git</li>
              <li className="mb-2">GitHub</li>
            </ul>
          </div>
          <div className="skill-card border  border-teal-400 p-6 rounded-md shadow-md hover:shadow-teal-400 transition-shadow" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Other Skills</h3>
            <ul className="list-disc pl-4 text-white">
              <li className="mb-2">Responsive Web Design</li>
              <li className="mb-2">Cross-browser Compatibility</li>
              <li className="mb-2">Web Accessibility</li>
              <li className="mb-2">Testing and Debugging</li>
              <li className="mb-2">Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills