import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

    <div className='bg-gray-800 py-1  flex items-center justify-center'>
      <div className='flex m-4'>
        <p className='footer-text pr-3'>made with love</p>
        <span style={{ width: '24px' }} className='emoji'>❤️</span>
      </div>
      <div className=''>
        <Link className='social-media-link text-blue-800 ' to='https://github.com/pvm-77'>Hussain sarfaraz</Link>
      </div>
    </div>



  )
}

export default Footer