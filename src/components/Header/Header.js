import React from 'react';
import './Header.css';
import Modal from '../Modal';
import Auth from '../Auth';

function Header() {
  const openModal = () => {
    document.querySelector(".ModalSignInBtn").click();
  }

  return (
    <>
      <div className='header sticky-top px-4 bg-white'>
        <div className="logo d-flex align-items-center">
          <span className="logo__green">ATG.</span>
          <span className="logo__gray">W</span>
          <span className="logo__svg">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30067 22.2V12.8205L11.9122 18.45H11.9452V24C9.9399 23.8981 7.99519 23.278 6.30067 22.2ZM13.6149 18.4845L19.2924 12.7935V22.1655C17.6003 23.2755 15.6368 23.9006 13.6149 23.973V18.4845ZM19.2924 18.2835V12.786H24.7706C24.6414 14.734 24.0334 16.6199 23.0005 18.276L19.2924 18.2835ZM2.5926 18.2835C1.55852 16.6252 0.950425 14.7366 0.822494 12.786H6.30067V18.276L2.5926 18.2835ZM9.30729 12.0165C9.30848 11.3294 9.51316 10.658 9.89547 10.0873C10.2778 9.5165 10.8206 9.07197 11.4552 8.80984C12.0899 8.54771 12.788 8.47973 13.4612 8.61451C14.1345 8.74929 14.7527 9.08078 15.2378 9.56707C15.7228 10.0534 16.053 10.6727 16.1865 11.3467C16.32 12.0207 16.2509 12.7192 15.9879 13.3539C15.7249 13.9886 15.2797 14.5311 14.7088 14.9127C14.1378 15.2943 13.4666 15.498 12.78 15.498C12.3236 15.4976 11.8717 15.4072 11.4502 15.2321C11.0286 15.0569 10.6457 14.8003 10.3232 14.477C10.0007 14.1538 9.74503 13.7701 9.57072 13.3479C9.39641 12.9257 9.3069 12.4733 9.30729 12.0165ZM19.1605 11.1465L13.6149 5.5965V0C15.6265 0.127176 17.5711 0.773109 19.2594 1.875V5.64L19.2759 5.6565H22.972C23.9982 7.30233 24.605 9.17515 24.7391 11.1105L24.7706 11.1465H19.1605ZM0.78952 11.1465L0.829988 11.1C0.980713 9.1712 1.58632 7.30566 2.59709 5.6565H6.28418L6.30067 5.64V1.875C7.98904 0.773109 9.93357 0.127176 11.9452 0V5.5905L6.39959 11.1405L0.78952 11.1465Z" fill="url(#paint0_linear)"/>
              <defs>
              <linearGradient id="paint0_linear" x1="0.78952" y1="10.464" x2="12.7907" y2="23.9906" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00A854"/>
              <stop offset="1" stop-color="#004D25"/>
              </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo__gray">
            RLD
          </span>
        </div>


        <div className="header__search">
          <i className="fas fa-search text-secondary me-3 ms-2"></i>
          <input type="text" className='text-secondary text-truncate' placeholder="Search for your favorite groups in ATG" />
        </div>


        <div role="button" onClick={openModal} className="header__createAccount cursor-pointer">
          <span>Create Account. </span>
          
          <span onClick={openModal} className="text-primary">It's free! </span>
          
          <i className="fas fa-caret-down mx-1"></i>
        </div>
      </div>


      
      <Modal id="ModalSignIn" buttonText="It's free!" className="d-none ModalSignInBtn">
        <Auth />
      </Modal>
    </>
  )
}
export default Header;
