/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'; // Import icon dari react-icons

const Navbar = ({ username }) => {
    return (
      <nav className="navbar">
        <div className="logo">MyWebsite</div>
        <div className="user-info">
            <div className='detail-user'>
          <span className="user-name">{username}</span>
          <span > Pendaftar</span>
            </div>
          <FaUserCircle className="user-icon" />
        </div>
      </nav>
    );
  };
export default Navbar
