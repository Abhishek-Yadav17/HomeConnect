import React from 'react';
import '../styles/Hero.scss';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Welcome to HomeConnect</h1>
      <h4>We connect you with <span>properties,</span> <span>interior designers</span> and <span>banks</span> for easy home ownership. Your dream home journey starts here with Zobiit <span>HomeConnect</span>.</h4>
      <div className="buttons">
        <button onClick={() => navigate('/properties')}>Properties <i class="ri-arrow-right-up-line"></i>
        </button>
        <button onClick={() => navigate('/interior-design')}>Interior Design <i class="ri-arrow-right-up-line"></i>
        </button>
        <button onClick={() => navigate('/bank')}>Bank Loan <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
