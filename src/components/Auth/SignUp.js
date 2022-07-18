import React from 'react';
import { ReactComponent as FBIcon } from '../../assets/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';

function SignUp() {
  return (
    <div className='signup'>
      <h1 className='fs-3 mb-3'>Create Account</h1>
      <form>
        <div className="input-group">
          <input type="text" placeholder='First Name' class="form-control form-control-lg" /> 
          <input type="text" placeholder='Last Name' class="form-control form-control-lg" />
        </div>
        <input type="email" placeholder="Email" className="form-control form-control-lg rounded-0" />
        <input type="password" placeholder="Password" className="form-control form-control-lg rounded-0" />
        <input type="password" placeholder="Confirm Password" className="form-control form-control-lg rounded-0 rounded-bottom" />
      
        <input type="submit" className="btn btn-primary btn-lg rounded-pill d-block w-100 mt-4" value="Create Account" />
      </form>

      <button className="btn btn-outline-secondary mt-4 w-100 d-flex justify-content-center align-items-center">
        <FBIcon className='mx-2' />
        Sign up with Facebook
      </button>
      <button className="btn btn-outline-secondary mt-2 mb-4 w-100 d-flex justify-content-center align-items-center">
        <GoogleIcon className='mx-2' />
        Sign up with Google
      </button>


    </div>
  )
}

export default SignUp
