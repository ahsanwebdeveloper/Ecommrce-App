import React, { useState } from 'react';
import '/src/Component/Sidbar/Sidbar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button - visible only on mobile */}
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <div className="sidebar-content">
          <p className="sign-in">Sign in | Register</p>
          <ul>
            <li>🏠 Home</li>
            <li>📂 Categories</li>
            <li>❤️ Favorites</li>
            <li>📦 My Orders</li>
            <li>🌐 English | USD</li>
            <li>📞 Contact us</li>
            <li>ℹ️ About</li>
            <li>📜 User Agreement</li>
            <li>🤝 Partnership</li>
            <li>🔒 Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
