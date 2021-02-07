import React from 'react';
import memberData from './team.json';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';

function TeamMembers() {
  return (
    <div>
      <Marquee velocity={20} pauseOnHover={true}>
        {times(memberData.length, Number).map((id) => (
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
                  <br />
                </p>
                <p className='teamName'>{memberData[id].team}</p>
              </div>
              <a
                className='fa fa-linkedin fa-lg'
                href={memberData[id].linkedin}
                target='_blank'
              ></a>
              <a
                className='fa fa-instagram fa-lg'
                href={memberData[id].instagram}
                target='_blank'
              ></a>
            </div>
          </a>
        ))}
      </Marquee>
    </div>
  );
}

export default TeamMembers;

/*
<Slider {...settings}>
      {times(memberData.length, Number).map((member) => (
        <a className='defaultClick' href={member.defaultLink} target='_blank'>
          <div className='creatorCard'>
            <img src={member.image} />
            <p>
              {member.firstName + ' '}
              <div className='removeText'>&nbsp;{member.lastName}</div> <br />
              {member.team}
            </p>
            <a
              className='fa fa-linkedin fa-lg'
              href={member.linkedin}
              target='_blank'
            ></a>
            <a
              className='fa fa-instagram fa-lg'
              href={member.instagram}
              target='_blank'
            ></a>
          </div>
        </a>
      ))}
    </Slider>
  */
