import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-900 text-teal-300 py-4 mt-10 w-full'>
      <p className='text-center'>&copy; {new Date().getFullYear()} Temitope. All rights reserved.</p>
    </div>
  )
}

export default Footer