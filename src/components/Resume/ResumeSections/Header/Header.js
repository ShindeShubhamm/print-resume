import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <h1 className="h-title">SHUBHAM SHINDE</h1>
      <div className="h-details">
        <h2 className="h-detail-text">JAVASCRIPT DEVELOPER</h2>
        <h2 className="h-detail-text">PUNE, INDIA</h2>
        <h2 className="h-detail-text">+91 8983493798</h2>
      </div>
    </div>
  );
};

export default Header;
