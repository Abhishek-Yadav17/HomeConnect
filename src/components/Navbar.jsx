import React, { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <img onClick={() => window.location.href = '/'} src="/logo.png" alt="logo" className="logo" />

      <div className="nav-right">
        <div className="nav2">
          <h4 onClick={() => window.location.href = '/properties'}>Properties</h4>
          <h4 onClick={() => window.location.href = '/interior-design'}>Interior Design</h4>
          <h4 onClick={() => window.location.href = '/bank'}>Bank Loan</h4>
        </div>

        <button className="admin-btn" onClick={() => window.location.href = '/login'}>
          <i className="ri-admin-line"></i>
        </button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </div>

      {menuOpen && (
        <div className="menu-content">
          <h4 onClick={() => { window.location.href = '/properties'; setMenuOpen(false); }}>Properties</h4>
          <h4 onClick={() => { window.location.href = '/interior-design'; setMenuOpen(false); }}>Interior Design</h4>
          <h4 onClick={() => { window.location.href = '/bank'; setMenuOpen(false); }}>Bank Loan</h4>
          <h4 onClick={() => { window.location.href = '/login'; setMenuOpen(false); }}>Admin</h4>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
