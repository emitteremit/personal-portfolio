import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0A0F37] text-[#D4AF37] py-4 mt-10 fixed bottom-0 w-full'>
      <p className='text-center'>&copy; {new Date().getFullYear()} Temitope. All rights reserved.</p>
    </div>
  )
}

export default Footer