import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import '../global.css';

const InterviewTips = ({ callback }) => {
  return (
    <div className='interview_tips' style={{ width: '85%', margin: '0 auto' }}>
      <PageFooter
        settings={{
          left: {
            alignment: 'left',
            image: metadata['preparation'].image,
            redirect: {
              linkType: 'component',
              componentName: 'preparation',
            },
            setActive: callback,
            title: 'Get started with internship preparation',
          },
          right: {
            alignment: 'right',
            image: metadata['experience'].image,
            redirect: {
              linkType: 'component',
              componentName: 'experience',
            },
            setActive: callback,
            title: 'During Internship',
          },
        }}
      />
    </div>
  );
};

export default InterviewTips;
