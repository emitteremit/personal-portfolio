import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-teal-300 py-4 mt-10 w-full border-t border-gray-800'>
      <p className='text-center'>&copy; {new Date().getFullYear()} Temitope. All rights reserved.</p>
    </div>
  )
}

export default Footer