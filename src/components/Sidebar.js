// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#store">Online Store</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
      <div className="language-selector">
        <select>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;