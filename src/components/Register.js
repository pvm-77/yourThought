import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { arrow } from '../arrow.png';
import { BiUserPin } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'

import { Button } from './Button'
import { AiOutlineMail, AiOutlineGithub, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLock } from 'react-icons/ai'
const Register = () => {
  const handleSubmit = () => {

  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({});
  const toggle = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='mt-1 mb-4 signup-form-wrapper mx-auto w-full sm:w-1/2 shadow-2xl'>
      <div className='mt-3 signup-form-container p-6 w-full'>
        <div className='mt-3 signup-form-header'>

          <p className='signup-header-title'><b>Create Account</b></p>
        </div>

        <div className='mt-3'>
          <p><i>Let's get to know you</i></p>

          <p className='small-text'>enter your details to continue</p>
        </div>

        <form className='pt-4 pb-4' onSubmit={handleSubmit}>


          <div className='signup-input-group relative mb-2 flex items-center'>
            <BiUserPin className='input-control-icon absolute left' style={{ width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setName(target.value)} value={name} type='text' id='username' name='username'
              className={`h-10 w-full pl-6 input-control ${errors.email ? 'error' : ''}`}
              placeholder={errors.name || 'Display Name'} />
          </div>

          <div className='mt-3 signup-input-group relative mb-2 flex items-center'>
            <AiOutlineMail className='input-control-icon absolute left' style={{ width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setEmail(target.value)} value={email} type='email' id='email' name='email'
              className={`h-10 w-full pl-6 input-control ${errors.email ? 'error' : ''}`}
              placeholder={errors.name || 'Email Address'} />
          </div>
          <div className='mt-3 signup-input-group relative mb-2 flex items-center'>
            <AiOutlineLock className='input-control-icon absolute left' style={{ width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setPassword(target.value)}
              value={password} type={showPassword ? 'text' : 'password'} id='password' name='password'
              className={`h-10 w-full pl-6 input-control ${errors.email ? 'error' : ''}`}
              placeholder={errors.name || 'password'} />
            <span className='password-visibility cursor-pointer absolute right-0' onClick={toggle}>
              {showPassword ? <AiOutlineEye style={{ width: '24px', height: '24px' }} /> : <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} />}

            </span>

          </div>


          <div className='mt-3 signup-input-group relative mb-2 flex items-center'>
            <AiOutlineLock className='input-control-icon absolute left' style={{ width: '24px', height: '24px' }} />

            <input
              onChange={({ target }) => setConfirmPassword(target.value)}

              value={confirmPassword}
              type='confirmPassword'
              id='confirmPassword'
              name='confirmPassword'
              className={`h-10 w-full pl-6 input-control ${errors.password ? 'error' : ''}`}
              placeholder={errors.name || 'confirm password'} />
          </div>

          <div className='mt-3 create-account'>

            <Button className={''}>
              Create Account
            </Button>
          </div>
          <div className='mt-3 account-info'>
            <p className='small-text'>already have an account?</p>
            <span> <Link className='account-info-link small-text' to='/login'>
              login here
            </Link>
            </span>
          </div>

          <div className='mt-3 account-create-warning'>
            <p className='small-text'>By clicking the 'CREATE ACCOUNT' button you are agree to <Link>Terms of use</Link> and <Link>privacy policy</Link></p>
          </div>



          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow my-4"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow my-4"></div>
          </div>


          <div className='social-buttons mt-4 mr-2'>
            <button className=' px-4 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded'>

              <FcGoogle className='w-6 h-6 inline-block mr-2' />
              Signup with Google

            </button>
            <button className='h-10 m-1 w-1/2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded'>
              <AiOutlineGithub className='w-6 h-6 inline-block mr-2' />
              Signup with GitHub
            </button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default Register