import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { HiDownload } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
// import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import '../global.css';
import './Resume.css';

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <IconContext.Provider value={{ color: '#03ccac', display: 'block' }}>
//       <div
//         className={className}
//         style={{ ...style, color: '#03ccac', display: 'block' }}
//         onClick={onClick}
//       >
//         <AiOutlineLeftCircle />
//       </div>
//     </IconContext.Provider>
//   );
// }

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <IconContext.Provider value={{ color: '#03ccac', display: 'block' }}>
//       <div
//         className={className}
//         style={{ ...style, color: '#03ccac', display: 'block' }}
//         onClick={onClick}
//       >
//         <AiOutlineRightCircle />
//       </div>
//     </IconContext.Provider>
//   );
// }

const Resume = ({ callback }) => {
  const resumeList = [
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/edsall.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/manila.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/marianas.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/urbana.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/edsall.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/manila.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/marianas.png',
    },
    {
      name: 'Thomas Thompson',
      image:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/a5034bfc/src/Assets/user.png',
      // linkedin: ,
      batch: 2022,
      companies: ['Apple (2020)', 'Fantasy (2021)', 'Microsoft (2021)'],
      link:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/sample_resume/urbana.png',
    },
  ];

  const [focus, setFocus] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    dots: true,
    beforeChange: (current, next) => setFocus(next),
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className='resume' style={{ width: '85%', margin: '0 auto' }}>
      <div className='upper_container'>
        <p style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>
          As recommended by students, for students.
        </p>
        <div style={{ width: 'auto', marginTop: '40px' }}>
          <button className='download'>
            <IconContext.Provider
              value={{
                color: '#03ccac',
                display: 'inline',
                marginRight: '5px',
              }}
            >
              {/* <a href={resumeList[focus].linkedin}> */}
              <div className='icon'>
                <HiDownload />
              </div>
              {/* </a> */}
            </IconContext.Provider>
            Download the IIITD template
          </button>
        </div>
      </div>
      <div className='resume_slider'>
        <Slider {...settings}>
          {resumeList.map((item, index) => (
            <div className='container'>
              <img
                className={focus === index ? 'resume_img active' : 'resume_img'}
                src={item.link}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='resume_details'>
        <div className='profile'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={resumeList[focus].image} className='avatar' />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className='header'>
                <h1>{resumeList[focus].name}</h1>
                <IconContext.Provider
                  value={{
                    color: 'black',
                    display: 'inline',
                  }}
                >
                  <div className='linkedin_icon'>
                    <FaLinkedinIn style={{ height: '20px', width: '20px' }} />
                  </div>
                </IconContext.Provider>
              </div>
              <div>Batch of {resumeList[focus].batch}</div>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>The resume below worked for:</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {resumeList[focus].companies.map((item) => (
              <div className='company_tag'>{item}</div>
            ))}
          </div>
        </div>
        <div className='full_resume'>
          <img src={resumeList[focus].link} />
        </div>
      </div>
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
