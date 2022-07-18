import React from 'react';
import './Hero.css';
import HeroImage from '../../assets/hero-Rectangle-2.png';

function Hero() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white rounded-0">
        <img src={HeroImage} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title fs-2 ms-5">Computer Engineering</h5>
          <p className="card-text ms-5">
            142,765 Computer Engineers follow this
          </p>
          </div>
      </div>
    </div>
 
  )
}
export default Hero;