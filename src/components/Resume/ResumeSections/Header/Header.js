import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <h1 className="h-title">SHUBHAM SHINDE</h1>
      <div className="h-details-wrapper">
        <h2 className="h-detail-text">JAVASCRIPT DEVELOPER</h2>
        <div className="h-detail">
          <MdLocationOn size={18} className="h-detail-icon" />
          <h2 className="h-detail-text">PUNE, INDIA</h2>
        </div>
        <div className="h-detail">
          <FaPhoneAlt size={16} className="h-detail-icon" />
          <h2 className="h-detail-text">+91 8983493798</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
