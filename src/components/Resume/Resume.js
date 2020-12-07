import React from 'react';
import Header from './ResumeSections/Header/Header';
import SectionTemplate from './ResumeSections/SectionTemplate/SectionTemplate';
import { profileData, employmentData, educationData, extraData, traitsData } from "../../data"

import './Resume.scss';

const Resume = (props) => {
  return (
    <div ref={props.reference} className="resume-main">
      <Header />
      <div className="resume-container">
        <div className="resume-left"></div>
        <div className="resume-right">
          <SectionTemplate data={profileData()} />
          <SectionTemplate data={employmentData()} />
          <SectionTemplate data={educationData()} />
          <SectionTemplate data={extraData()} />
          <SectionTemplate data={traitsData()} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
