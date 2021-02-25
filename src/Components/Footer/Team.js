import React from 'react';
import firebase from '../../fire';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';

function TeamMembers() {
  const [memberData, setMemberData] = React.useState([]);

  const fetchMemberData = async () => {
    const creatorRef = firebase.database().ref('Team');
    const snapshot = await creatorRef.once('value');
    return Object.values(snapshot.val());
  };

  React.useEffect(async () => {
    const data = await fetchMemberData();
    setMemberData(data);
    console.log(data);
    return () => {};
  }, []);

  return (
    memberData.length && (
      <Marquee>
        {times(memberData.length, Number).map((id, index) => (
          <div key={index}>
            <a
              className='defaultClick'
              href={memberData[id].defaultLink}
              target='_blank'
            >
              <div className='memberCard'>
                <img src={memberData[id].image} />
                <div className='memberText'>
                  <p>
                    {memberData[id].firstName + ' '}
                    <div className='removeText'>
                      &nbsp;{memberData[id].lastName}
                    </div>{' '}
                  </p>
                  <p className='teamName'>{memberData[id].team}</p>
                </div>
                <a
                  className='fa fa-linkedin fa-lg'
                  href={memberData[id].linkedin}
                  target='_blank'
                ></a>
              </div>
            </a>
          </div>
        ))}
      </Marquee>
    )
  );
}

export default TeamMembers;
