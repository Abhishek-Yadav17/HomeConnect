import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <img onClick={() => navigate('/')} src="/logo.png" alt="logo" className="logo" />

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

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </div>

      {menuOpen && (
        <div className="menu-content">
          <h4 onClick={() => { navigate('/properties'); setMenuOpen(false); }}>Properties</h4>
          <h4 onClick={() => { navigate('/interior-design'); setMenuOpen(false); }}>Interior Design</h4>
          <h4 onClick={() => { navigate('/bank'); setMenuOpen(false); }}>Bank Loan</h4>
          <h4 onClick={() => { navigate('/login'); setMenuOpen(false); }}>Admin</h4>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
