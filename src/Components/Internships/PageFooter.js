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
        {/* <img
          src='https://media1.giphy.com/media/9PvkZLdw8C8hzq5R0O/source.gif'
          style={{ width: '200px' }}
        /> */}
        <NavCard {...settings.right} />
      </div>
    </div>
  );
};

export default PageFooter;
