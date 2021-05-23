import React from 'react';
import { FaHome, FaHistory, FaFileExport, FaRegSun } from 'react-icons/fa';
import './Menu.css';

const Menu = ({ children }) => {
  return (
    <div className="menu-container">
      <div className="option"><FaHome /></div>
      <div className="option"><FaHistory /></div>
      <div className="option"><FaFileExport /></div>
      <div className="option"><FaRegSun /></div>
    </div>
  );
};

export { Menu };
