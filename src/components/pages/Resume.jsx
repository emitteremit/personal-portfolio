import React from 'react'
import Header from '../Header'

const Resume = () => {
  return (
    <>
      <Header/>
      <section className="mx-[30px] md:mx-[100px] my-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">My Works</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="experience-card border border-teal-400 p-5 rounded-lg shadow-md hover:shadow-teal-200 transition-shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Apartment Website</h3>
            <a href="https://bucolic-griffin-886896.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-500 mt-4 block">
              https://bucolic-griffin-886896.netlify.app/
            </a>
            <p className="text-white">
              Developed a responsive apartment website using HTML, Bootstrap, and AOS animation, showcasing luxurious living spaces and amenities. The website features floor plans, services, and a contact form, providing an immersive experience for potential residents. With a modern design and seamless navigation, the site effectively promotes the apartment complex and encourages bookings.
            </p>
            <p className="text-white mt-4">
              Technologies used: HTML, CSS, Bootstrap, AOS Animation
            </p>
            <p className="text-white mt-4">
              Role: Front-end Developer
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume