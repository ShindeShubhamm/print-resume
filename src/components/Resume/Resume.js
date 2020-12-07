import React from 'react';
import Header from './ResumeSections/Header/Header';
import SectionTemplate from './ResumeSections/SectionTemplate/SectionTemplate';
import Details from './ResumeSections/Details/Details';
import Links from './ResumeSections/Links/Links';
import Ratings from './ResumeSections/Ratings/Ratings'
import {
  profileData,
  employmentData,
  educationData,
  extraData,
  traitsData,
  linksData,
  skillsData,
  languagesData
} from "../../data"

import './Resume.scss';

const Resume = (props) => {
  return (
    <div ref={props.reference} className="resume-main">
      <Header />
      <div className="resume-container">
        <div className="resume-left">
          <Details />
          <Links links={linksData()} />
          <Ratings data={skillsData()} />
          <Ratings data={languagesData()} />
        </div>
        <div className="resume-right">
          <SectionTemplate data={profileData()} />
          <SectionTemplate data={employmentData()} />
          <SectionTemplate data={educationData()} />
          <SectionTemplate data={extraData()} />
          <SectionTemplate data={traitsData()} />
        </div>
        <div className="html"></div>
      </div>
    </div>
  );
};

export default Resume;
