import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import '../global.css';

const Resume = ({ callback }) => {
  return (
    <div className='resume' style={{ width: '85%', margin: '0 auto' }}>
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
