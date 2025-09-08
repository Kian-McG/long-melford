import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-4 h-[30vh]'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer