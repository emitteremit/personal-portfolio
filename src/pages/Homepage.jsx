import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { MessageCircle } from 'lucide-react';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Body />
      <a
        href="https://wa.me/2348144331503"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999]"
      >
        <div
          className="
      w-14 h-14
      bg-green-500
      hover:bg-green-600
      rounded-full
      shadow-xl
      flex items-center
      justify-center
      text-2xl
      transition-all
      duration-300
      hover:scale-110
    "
        >
          💬
        </div>
      </a>
      <Footer />

    </div>
  )
}

export default Homepage