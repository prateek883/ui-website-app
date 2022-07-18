import React, { useState } from 'react';
import './Auth.css';
import Illustration from '../../assets/atg_illustration.svg';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Auth() {
  const [authForm, setAuthForm] = useState('signup');   // for conditional display of sign up form.
  
  const toggleAuthForm = () => setAuthForm(authForm === 'signup' ? 'signin' : 'signup');

  return (
    <div className="auth">
      <div className="auth__alert p-3 text-center">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
      </div>

      <div className="container p-3">
        <div className="row">
          <div className="col-6 auth__left ps-4">
            {authForm === 'signup' ? <SignUp /> : <SignIn />}
          </div>

          <div className="col-6 auth__right d-flex pe-4 flex-column justify-content-between align-items-center">
            <p className='align-middle w-100 fs-6 d-flex align-items-center justify-content-end'>
              
              {authForm === 'signup' ? 'Already have an account?' : "Don't have an account yet?"}
              
              <button onClick={toggleAuthForm} className="btn btn-link p-0 m-0 ms-1">
                {authForm === 'signup' ? "Sign In" : "Create new for free!"}
              </button>
            </p>

            <img className='auth__illustraton' src={Illustration} alt="illustration" />

            {authForm === 'signup' && 
              <p className="auth__disclaimer text-muted">
                By signing up, you agree to our Terms & conditions, Privacy policy.
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;
