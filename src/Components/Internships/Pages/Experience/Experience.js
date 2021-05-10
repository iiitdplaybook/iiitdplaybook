import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../metadata';
import './Experience.css';
import '../global.css';

const Experience = ({ callback, list }) => {
  return (
    <div
      className='experience'
      style={{ width: '85%', margin: '0 auto', position: 'relative' }}
    >
      <div className='article_grid'>
        {list.map((item) => {
          return (
            <div className='article_card'>
              <a href={item.url} target='_blank'>
                {item.type === 'article' ? (
                  <img className='article_image' src={item.image} />
                ) : (
                  <iframe
                    className='article_video'
                    width='560'
                    height='315'
                    src={item.embed}
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  />
                )}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {item.tags.map((tag) => (
                    <div className='article_tag'>{tag}</div>
                  ))}
                </div>
                <h2 className='article_title'>{item.title}</h2>
                <p className='article_author'>{item.author}</p>
                <p className='article_desc'>{item.description}</p>
              </a>
            </div>
          );
        })}
      </div>
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
