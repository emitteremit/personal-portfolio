import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <main className="bg-blue-900 text-white">
      <div className='container px-[30px] md:px-[100px] lg:px-[200px] py-[80px]'>
        <h2 className="text-teal-400 text-l">Hi, my name is</h2>
        <h1 className=" text-[30px] md:text-[60px] font-bold text-white">Omodele Temitope.</h1>
        <h2 className=" text-[20px] md:text-[40px] text-gray-400 font-semibold">I drive digital growth through innovative front-end solutions.</h2>
        <p className="text-gray-400 mt-4 max-w-lg ">
          As a results-driven front-end developer with 3+ years of experience, I have successfully delivered over 10+ projects, driving a 20% increase in user engagement and a 15% boost in conversion rates. Proficient in React, JavaScript, and CSS, I specialize in crafting scalable, user-centric web applications that exceed expectations.
        </p>
        <div className='mt-[20px]'>
        <Link to='/Resume' className=" border border-teal-400 px-4 py-2 text-teal-400 hover:bg-teal-400 hover:text-blue-900 rounded-md">View My Work</Link>
        </div>
      </div>
    </main>
  );
};

export default Body;