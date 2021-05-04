import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import './Experience.css';
import '../global.css';

const Experience = ({ callback }) => {
  const articles = [
    {
      type: 'article',
      url:
        'https://www.notion.so/Playbook-team-5e39c62938ce4614aa9b8499fa7c1949',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Adobe'],
      title: 'Life at Adobe - a remote experience',
      author: 'Yashwin Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Microsoft', 'UI/UX'],
      title: 'Life at Microsoft - a UX design remote experience',
      author: 'Kshitij Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'article',
      url:
        'https://www.notion.so/Playbook-team-5e39c62938ce4614aa9b8499fa7c1949',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Adobe'],
      title: 'Life at Adobe - a remote experience',
      author: 'Yashwin Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/4tLoF8mdsDU',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Microsoft', 'UI/UX'],
      title: 'Life at Microsoft - a UX design remote experience',
      author: 'Kshitij Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'article',
      url:
        'https://www.notion.so/Playbook-team-5e39c62938ce4614aa9b8499fa7c1949',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Adobe'],
      title: 'Life at Adobe - a remote experience',
      author: 'Yashwin Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Microsoft', 'UI/UX'],
      title: 'Life at Microsoft - a UX design remote experience',
      author: 'Kshitij Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'article',
      url:
        'https://www.notion.so/Playbook-team-5e39c62938ce4614aa9b8499fa7c1949',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Adobe'],
      title: 'Life at Adobe - a remote experience',
      author: 'Yashwin Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Microsoft', 'UI/UX'],
      title: 'Life at Microsoft - a UX design remote experience',
      author: 'Kshitij Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      type: 'article',
      url:
        'https://www.notion.so/Playbook-team-5e39c62938ce4614aa9b8499fa7c1949',
      image: 'https://dummyimage.com/360x300/04ABB0/fff.png&text=article+image',
      tags: ['Adobe'],
      title: 'Life at Adobe - a remote experience',
      author: 'Yashwin Agrawal',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
  ];

  return (
    <div
      className='experience'
      style={{ width: '85%', margin: '0 auto', position: 'relative' }}
    >
      <div className='article_grid'>
        {articles.map((item) => {
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
                    src={item.url}
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
