import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='rd_'>
      <div className='JPE'>
        <div className='footer'>
          <p className='footer-text'>made with love</p>
          <span style={{ width: '24px' }} className='emoji'>❤️</span>
          <Link className='social-media-link' to='https://github.com/pvm-77'>Hussain sarfaraz</Link>
        </div>
      </div>

      <div className='C2'>

      </div>

    </div>
  )
}

export default Footer