import React from 'react';
import Header from './ResumeSections/Header/Header';
import './Resume.scss';

const Resume = (props) => {
  return (
    <div ref={props.reference} className="resume-main">
      <Header />
    </div>
  );
};

export default Resume;
