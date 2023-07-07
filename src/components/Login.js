import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../arrow.png'
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLock } from 'react-icons/ai';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const handleSubmit=()=>{}
  const toggle=()=>{
    setShowPassword(!showPassword)
  }
  return (
    <div className='mt-10 bg-gray-800  min-h-screen signup-form-wrapper mx-auto w-full sm:w-1/2  shadow-2xl' >
      <div className='signup-form-container'>
        <div className='signup-form-header  flex items-center content-start mb-4'  >
          <Link to='/' className='item back-arrow-animation'>
            <img className='arrow' src={''} alt='arrow' />
          </Link>
          <p className='signup-header-title'><b>login</b></p>
        </div>
        <div>
          <p><b>welcome back!</b></p>
          <p className='small-text'>please login with your credentials</p>
        </div>

        <form onSubmit={handleSubmit} className='pt-4 pb-4'>
          <div className='signup-input-group  relative mb-2 flex items-center'>
            <AiOutlineMail className='input-control-icon absolute left' style={{ color: '#640146', width: '24px', height: '24px' }} />
            <input
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              type='text'
              id='email'
              name='email'
              className={` h-10 w-full pl-6  input-control ${errors.email ? 'error' : ''}`}
              placeholder={errors.email || 'enter email here'} />
          </div>
          <div className='signup-input-group  relative mb-2 flex items-center'>
            <AiOutlineLock className='input-control-icon absolute left' style={{ color: '#640146', width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setPassword(target.value)}
              value={password} type={showPassword ? 'text' : 'password'} id='password' name='password'
              className={` h-10 w-full pl-6 input-control ${errors.password ? 'error' : ''}`}
              placeholder={errors.password || 'enter password here'} />
            <span className='password-visibility cursor-pointer absolute right-0' onClick={toggle}>
              {showPassword ? <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} /> : <AiOutlineEye style={{ width: '24px', height: '24px' }} />}

            </span>

          </div>

          <div className='forgot-password'>
            <Link to='/forgotPassword' className='small-text'>Forgot Password</Link>
          </div>

          <div className='account-info flex row-auto '>
            <p className='small-text'>don't have an account yet?</p>
            <Link className='account-info-link ' to='/signup'>
              create an account here
            </Link>
          </div>
          <div className='create-account'>
            <button className='mx-auto w-3/4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='submit'>login</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login