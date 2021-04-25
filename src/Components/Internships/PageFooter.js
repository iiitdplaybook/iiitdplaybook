import React from 'react';
import NavCard from './NavCard';

const PageFooter = ({ settings }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{ margin: '80px', width: '50%', border: '2px solid #04ABB082' }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '60px',
        }}
      >
        <NavCard {...settings.left} />
        <NavCard {...settings.right} />
      </div>
    </div>
  );
};

export default PageFooter;
