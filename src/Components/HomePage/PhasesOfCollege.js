import React, { useEffect } from 'react';
import './PhasesOfCollege.css';

function PhasesOfCollege() {
  const itemList = [
    {
      title: 'brewbakes',
      img:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg',
    },
    {
      title: 'graduation',
      img:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/cae94a65/src/Assets/college_phases/graduation.gif',
    },
    {
      title: 'holi',
      img:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/holi.jpeg',
    },
    {
      title: 'library',
      img:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/library.jpeg',
    },
    {
      title: 'dandiya',
      img:
        'https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/dandiya.jpg',
    },
  ];

  function randomAngle() {
    let angle = -15 + Math.random() * 30;
    return angle + 'deg';
  }

  return (
    <div className='college-phases'>
      <div className='items'>
        {itemList.map((item, index) => {
          if (index === Math.floor(itemList.length / 2))
            return (
              <>
                <h1 className='textCard'>Phases of College Life</h1>
                <div key={index} className='item'>
                  <img
                    className='phases-image'
                    src={item.img}
                    alt={item.title}
                    style={{
                      transform: 'rotate(' + randomAngle() + ')',
                    }}
                  />
                </div>
              </>
            );
          return (
            <div key={index} className='item'>
              <img
                className='phases-image'
                src={item.img}
                alt={item.title}
                style={{
                  transform: 'rotate(' + randomAngle() + ')',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhasesOfCollege;
