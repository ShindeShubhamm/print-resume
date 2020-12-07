import React from 'react';
import Header from './ResumeSections/Header/Header';
import Education from './ResumeSections/Education/Education';

import './Resume.scss';

const Resume = (props) => {
  return (
    <div ref={props.reference} className="resume-main">
      <Header />
      <div className="resume-container">
        <div className="resume-left"></div>
        <div className="resume-right">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Resume;
