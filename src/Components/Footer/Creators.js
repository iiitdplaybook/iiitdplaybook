import React from 'react';
import firebase from '../../fire';

function Creators() {
  const [creatorData, setCreatorData] = React.useState([]);

  const fetchCreatorData = async () => {
    const creatorRef = firebase.database().ref('Creators');
    const snapshot = await creatorRef.once('value');
    return Object.values(snapshot.val());
  };

  React.useEffect(async () => {
    const data = await fetchCreatorData();
    setCreatorData(data);
    return () => {};
  }, []);

  return (
    <>
      {creatorData.map((creator, index) => (
        <a
          className='defaultClick'
          key={index}
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
