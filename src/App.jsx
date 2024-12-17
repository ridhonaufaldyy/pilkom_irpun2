/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar';
import MenuSamping from './components/menuSamping';
import Content from './components/Content';
import './App.css'
import { useState } from 'react';const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const username = 'John Doe'; // Ganti dengan logika yang sesuai

  return (
    <div className="app-container">
      <Navbar username={username} />
      <div className="main-layout">
        <MenuSamping setActiveMenu={setActiveMenu}/>
        <Content activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default App;
