import React from 'react';
import creatorData from './creators.json';

function Creators() {
  return (
    <>
      {creatorData.map((creator) => (
        <a
          className='defaultClick'
          href={creator.defaultLink}
          target='_blank'
          rel='noreferrer'
        >
          <div className='creatorCard'>
            <img src={creator.image} alt={creator.firstName} />
            <div className='memberText'>
              <p>
                {creator.firstName + ' '}
                <div className='removeText'>&nbsp;{creator.lastName}</div>{' '}
              </p>
              <p className='teamName'>Creator</p>
            </div>
            {/* eslint-disable-next-line */}
            <a
              className='fa fa-linkedin fa-lg'
              href={creator.linkedin}
              target='_blank'
              rel='noreferrer'
            ></a>
          </div>
        </a>
      ))}
    </>
  );
}

export default Creators;
