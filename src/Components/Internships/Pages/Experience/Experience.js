import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import '../global.css';

const Experience = ({ callback }) => {
  return (
    <div className='experience' style={{ width: '85%', margin: '0 auto' }}>
      <PageFooter
        settings={{
          left: {
            alignment: 'left',
            image: metadata['interviewTips'].image,
            redirect: {
              linkType: 'component',
              componentName: 'interviewTips',
            },
            setActive: callback,
            title: 'Interview Tips',
          },
          right: {
            alignment: 'right',
            colors: ['#8E4DFF', '#D6D4FF'],
            image: metadata['experience'].image,
            redirect: {
              linkType: 'link',
              link: 'https://iiitdplaybook.web.app/homepage',
            },
            title: 'Research with Professors',
          },
        }}
      />
    </div>
  );
};

export default Experience;
