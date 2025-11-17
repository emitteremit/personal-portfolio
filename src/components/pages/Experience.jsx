import React from 'react'
import Header from '../Header'

const Experience = () => {
  return (
    <>
      <Header/>
      <section className="mx-[30px] md:mx-[100px] my-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">My Experience</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="experience-card border border-teal-400 p-5 rounded-lg shadow-md hover:shadow-teal-200 transition-shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Front-end Developer (Self-Taught)</h3>
            <p className="text-gray-400 mb-4">Freelance (2022 - Present)</p>
            <ul className="list-disc pl-4 text-white">
              <li className="mb-2">Designed and developed multiple web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js.</li>
              <li className="mb-2">Implemented responsive design and ensured cross-browser compatibility.</li>
              <li className="mb-2">Utilized Git and GitHub for version control and collaboration.</li>
              <li className="mb-2">Built and deployed projects using Vite + React.</li>
            </ul>
          </div>
          <div className="experience-card border border-teal-400 p-5 rounded-lg shadow-md hover:shadow-teal-200 transition-shadow mb-10" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Front-end Development Intern</h3>
            <p className="text-gray-400 mb-4">Valuemax (2021 - 2022)</p>
            <ul className="list-disc pl-4 text-white">
              <li className="mb-2">Assisted in the development of web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.js.</li>
              <li className="mb-2">Participated in code reviews and ensured code quality.</li>
              <li className="mb-2">Collaborated with senior developers to identify and fix bugs.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience