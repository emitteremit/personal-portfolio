import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-teal-400 sticky top-0 z-10 border-b border-gray-900">
      <div className="w-12 h-12 flex items-center justify-center text-cyan-400 border-2 border-cyan-400 rounded-full">
        <span className='text-2xl font-bold'>T</span>
      </div>
      <nav className="hidden md:flex justify-center items-center gap-4 font-semibold">
        <div className='flex justify-center items-center gap-1'>
          <p className='text-teal-400'>01.</p>
          <Link to="/" className="text-white hover:text-teal-400 ">About</Link>
        </div>
        <div className='flex items-center gap-1'>
          <p className='text-teal-400'>02.</p>
          <Link to="/experience" className="text-white hover:text-teal-400 ">Experience</Link>
        </div>
        <div className='flex items-center gap-1'>
          <p className='text-teal-400'>03.</p>
          <Link to="/skills" className="text-white hover:text-teal-400 ">Skills</Link>
        </div>
        <div className='flex items-center gap-1'>
          <p className='text-teal-400'>04.</p>
          <Link to="/contact" className="text-white hover:text-teal-400 ">Contact</Link>
        </div>
        <Link to='/Resume' className=" font-semibold border border-teal-400 text-teal-400 px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-black">Works</Link>
      </nav>
      
      <div className="md:hidden">
        <button className="text-teal-400" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 w-64 bg-black border-r border-gray-900 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className='p-4 flex flex-col gap-4 font-bold'>
          <div className='flex justify-center'>

            <div className="w-40 h-40 flex items-center justify-center text-cyan-400 border-2 border-cyan-400 rounded-full">
              <span className='text-[60px] font-bold'>T</span>
            </div>
          </div>
          <div className='flex items-center gap-1 '>
            <p className='text-teal-400'>01.</p>
            <Link to="/" className="text-white hover:text-teal-400 ">About</Link>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-teal-400'>02.</p>
            <Link to="/experience" className="text-white hover:text-teal-400 ">Experience</Link>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-teal-400'>03.</p>
            <Link to="/skills" className="text-white hover:text-teal-400 ">Skills</Link>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-teal-400'>04.</p>
            <Link to="/contact" className="text-white hover:text-teal-400 ">Contact</Link>
          </div>
          <Link to='/Resume' className="font-semibold text-center border border-teal-400 text-teal-400 px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-black">Works</Link>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;