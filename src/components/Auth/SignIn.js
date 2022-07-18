import React from 'react';
import { ReactComponent as FBIcon } from '../../assets/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';

function SignIn() {
  return (
    <div className='signin'>
      <h1 className='fs-3 mb-3'>Sign In</h1>
      <form>
        <input type="email" placeholder="Email" className="form-control form-control-lg rounded-0 rounded-top" />
        <input type="password" placeholder="Password" className="form-control form-control-lg rounded-0 rounded-bottom" />
      
        <input type="submit" className="btn btn-primary btn-lg rounded-pill d-block w-100 mt-4" value="Sign In" />
      </form>

      <button className="btn btn-outline-secondary mt-4 w-100 d-flex justify-content-center align-items-center">
        <FBIcon className='mx-2' />
        Sign up with Facebook
      </button>
      <button className="btn btn-outline-secondary mt-2 mb-3 w-100 d-flex justify-content-center align-items-center">
        <GoogleIcon className='mx-2' />
        Sign up with Google
      </button>

      <button className="btn w-100">Forgot Password?</button>

    </div>
  )
}

export default SignIn
