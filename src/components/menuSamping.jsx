/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHome, FaInfoCircle, FaConciergeBell, FaPhone, FaBlog, FaQuestionCircle } from 'react-icons/fa';

const MenuSamping = ({ setActiveMenu }) => {
    const menus = [
        { name: 'Kategori Beasiswa', icon: <FaHome /> },
        { name: 'Identitas Diri', icon: <FaInfoCircle /> },
        { name: 'Pendidikan Terakhir', icon: <FaConciergeBell /> },
        { name: 'Persyaratan Substansif', icon: <FaPhone /> },
        { name: 'Dokumen Pendukung', icon: <FaBlog /> },
        { name: 'Pengumuman', icon: <FaQuestionCircle /> },
    ];

    return (
        <aside className="sidebar">
          <ul className='detail-sidebar'>
            {menus.map((menu, index) => (
              <li key={index} onClick={() => setActiveMenu(menu.name)} className="menu-item">
                    <span className="menu-icon">{menu.icon}</span>
                    <span className="menu-name">{menu.name}</span>
                {/* <div></div> */}
              </li>
            ))}
            <button className="submit-button">Submit</button>
          </ul>
        </aside>
      );
}

export default MenuSamping;
