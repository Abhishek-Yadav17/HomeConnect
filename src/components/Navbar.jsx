import React from 'react';
import '../styles/Navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img src="/logo.png" alt="logo" className='logo' />
      <div className="nav-right">
        <div className="nav2">
          <h4 onClick={() => navigate('/properties')}>Properties</h4>
          <h4 onClick={() => navigate('/interior-design')}>Interior Design</h4>
          <h4 onClick={() => navigate('/bank')}>Bank Loan</h4>
        </div>

        <button className="admin-btn" onClick={() => navigate('/login')}>
          <i className="ri-admin-line"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
