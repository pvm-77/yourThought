import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import {
  AiOutlineMail, AiOutlineEyeInvisible,
  AiOutlineEye, AiOutlineLock, AiOutlineGithub
} from 'react-icons/ai';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const handleSubmit = () => { }
  const toggle = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <div className='mt-1 mb-4 signup-form-wrapper mx-auto w-full sm:w-1/2 shadow-2xl'>
        <div className='signup-form-container p-6 w-full'>
          <div className='signup-form-header flex items-center content-start mb-4'>

            <p className='signup-header-title bg-center'><b>Login</b></p>
          </div>
          <div>
            <p><b>Welcome back!</b></p>
            <p className='small-text'>Please login with your credentials</p>
          </div>
          <form onSubmit={handleSubmit} className='pt-4 pb-4'>
            <div className='signup-input-group relative mb-2 flex items-center'>
              <AiOutlineMail className='input-control-icon absolute left' style={{ color: '#640146', width: '24px', height: '24px' }} />
              <input
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                type='text'
                id='email'
                name='email'
                className={`h-10 w-full pl-6 input-control ${errors.email ? 'error' : ''}`}
                placeholder={errors.email || 'Enter email here'}
              />
            </div>
            <div className='signup-input-group relative mb-2 flex items-center'>
              <AiOutlineLock className='input-control-icon absolute left' style={{ color: '#640146', width: '24px', height: '24px' }} />
              <input
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                className={`h-10 w-full pl-6 input-control ${errors.password ? 'error' : ''}`}
                placeholder={errors.password || 'Enter password here'}
              />
              <span className='password-visibility cursor-pointer absolute right-0' onClick={toggle}>
                {showPassword ? <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} /> : <AiOutlineEye style={{ width: '24px', height: '24px' }} />}
              </span>
            </div>
            <div className='forgot-password'>
              <Link to='/forgotPassword' className='small-text'>Forgot Password</Link>
            </div>
            <div className='account-info flex row-auto mb-3'>
              <p className='small-text'>Don't have an account yet?</p>
              <Link className='account-info-link small-text' to='/signup'>
                create an account here
              </Link>
            </div>
            <div className='create-account'>
              <button className='mx-auto w-3/4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='submit'>
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow my-4"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow my-4"></div>
          </div>
          <div className='social-buttons mt-4 mr-2'>
            <button className=' px-4 py-2 rounded-lg shadow-md hover:bg-slate-100'>
              <FcGoogle className='w-6 h-6 inline-block mr-2' />
              Login with Google
            </button>
            <button className='bg-gray-800 text-white px-4 py-2 rounded-lg ml-2 shadow-md hover:bg-gray-900'>
              <AiOutlineGithub className='w-6 h-6 inline-block mr-2' />
              Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login