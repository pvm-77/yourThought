import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { arrow } from '../arrow.png';
import { BiUserPin } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLock } from 'react-icons/ai'
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
    <div className=''>
      <div className='py-3 px-5 my-3 mx-5 rounded-lg shadow-2xl'>
        <div className='signup-form-header'>
          <Link to='/' className='item back-arrow-animation'>
            <img className='arrow' src={''} alt='back' />
          </Link>
          <p className='signup-header-title'><b>create account</b></p>
        </div>

        <div>
          <p><i>Let's get to know you</i></p>

          <p className='small-text'>enter your details to continue</p>
        </div>

        <form className='signup-form' onSubmit={handleSubmit}>
          <div className='signup-input-group'>
            <BiUserPin className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setName(target.value)} value={name} type='text' id='username' name='username'
              className='input-control'
              placeholder={errors.name || 'Display Name'} />
          </div>

          <div className='signup-input-group'>
            <AiOutlineMail className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setEmail(target.value)} value={email} type='email' id='email' name='email'
              className='input-control'
              placeholder={errors.name || 'Email Address'} />
          </div>
          <div className='signup-input-group'>
            <AiOutlineLock className='input-control-icon' style={{ color: '#640146', width: '24px', height: '24px' }} />
            <input onChange={({ target }) => setPassword(target.value)}
              value={password} type={showPassword ? 'text' : 'password'} id='password' name='password'
              className='input-control'
              placeholder={errors.name || 'password'} />
            <span className='password-visibility' onClick={toggle}>
              {showPassword ? <AiOutlineEye style={{ width: '24px', height: '24px' }} /> : <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} />}

            </span>

          </div>


          <div className='signup-input-group'>

            <input
              onChange={({ target }) => setConfirmPassword(target.value)}

              value={confirmPassword} type='confirmPassword' id='confirmPassword' name='confirmPassword'
              className='input-control' placeholder={errors.name || 'confirm password'} />


          </div>


          <div className='account-info'>
            <p className='small-text'>already have an account?</p>
            <Link className='account-info-link' to='/login'>
              login here
            </Link>
          </div>
          <div className='account-create-warning'>
            <p className='small-text'>By clicking the 'CREATE ACCOUNT' button you are agree to <Link>Terms of use</Link> and <Link>privacy policy</Link></p>
          </div>
          <div className='create-account'>
            <button type='submit'>create account</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Register