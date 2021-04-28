import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { HiDownload } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Document, Page, pdfjs } from 'react-pdf';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import '../global.css';
import './Resume.css';
import { times } from 'lodash';
import edsall from '../../../../Assets/Internships/sample_resume/edsall.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({ callback }) => {
  const resumeList = [
    {
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/edsall.pdf',
    },
    {
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/manila.pdf',
    },
    {
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/marianas.pdf',
    },
    {
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/urbana.pdf',
    },
  ];

  const [focus, setFocus] = useState(0);

  const handleClick = (num) => {
    setFocus((focus + num) % resumeList.length);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: Math.min(4, resumeList.length),
    slidesToScroll: Math.min(4, resumeList.length),
    autoplay: false,
    cssEase: 'ease-in-out',
    arrows: true,
    centerMode: true,
  };

  const Box = styled.div`
    padding: 10px;
    vertical-align: middle;
  `;

  return (
    <div className='resume' style={{ width: '85%', margin: '0 auto' }}>
      <p style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>
        As recommended by students, for students.
      </p>
      <div style={{ width: 'auto', marginTop: '40px' }}>
        <button className='download'>
          <IconContext.Provider
            value={{ color: '#03ccac', display: 'inline', marginRight: '5px' }}
          >
            <div className='icon'>
              <HiDownload />
            </div>
          </IconContext.Provider>
          Download the IIITD template
        </button>
      </div>
      <div className='resume-slider'>
        <Slider {...settings}>
          {times(resumeList.length, String).map((id, index) => (
            <div key={index}>
              <Box key={`resumes-${id}`}>
                <Document file={resumeList[id].link} />
              </Box>
            </div>
          ))}
        </Slider>
      </div>
      <Document file={edsall} />
      <PageFooter
        settings={{
          left: {
            alignment: 'left',
            image: metadata['introduction'].image,
            redirect: {
              linkType: 'component',
              componentName: 'introduction',
            },
            setActive: callback,
            title: 'Introduction',
          },
          right: {
            alignment: 'right',
            image: metadata['preparation'].image,
            redirect: {
              linkType: 'component',
              componentName: 'preparation',
            },
            setActive: callback,
            title: 'Get started with internship preparation',
          },
        }}
      />
    </div>
  );
};

export default Resume;
