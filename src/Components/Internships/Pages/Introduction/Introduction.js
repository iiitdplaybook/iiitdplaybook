import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../metadata';
import '../global.css';
import './Introduction.css';
import Slider from 'react-slick';
import pic1 from '../../../../Assets/Internships/rules/pic1.png';
import pic2 from '../../../../Assets/Internships/rules/pic2.png';
import pic3 from '../../../../Assets/Internships/rules/pic3.png';
import RulesCard from './RulesCard';

const Introduction = ({ callback }) => {
  const rulesCards = [
    {
      image: pic1,
      title: 'Top 10 internship tips',
      tips: {
        tip1: 'Tip #11',
        tip2: 'Tip #12',
        tip3: 'Tip #13',
        tip4: 'Tip #14',
        tip5: 'Tip #15',
        tip6: 'Tip #16',
      },
    },
    {
      image: pic2,
      title: 'Top 10 internship tips',
      tips: {
        tip1: 'Tip #21',
        tip2: 'Tip #22',
        tip3: 'Tip #23',
      },
    },
    {
      image: pic3,
      title: 'Top 10 internship tips',
      tips: {
        tip1: 'Tip #31',
        tip2: 'Tip #32',
        tip3: 'Tip #33',
      },
    },
    {
      image: pic1,
      title: 'Top 10 internship tips',
      tips: {
        tip1: 'Tip #41',
        tip2: 'Tip #42',
        tip3: 'Tip #43',
      },
    },
    {
      image: pic2,
      title: 'Top 10 internship tips',
      tips: {
        tip1: 'Tip #51',
        tip2: 'Tip #52',
        tip3: 'Tip #53',
      },
    },
    {
      image: pic3,
      title: 'Top 10 internship tips',
      tips: {
        tip1: 'Tip #61',
        tip2: 'Tip #62',
        tip3: 'Tip #63',
      },
    },
  ];

  const slidesNum =
    window.innerWidth < 600
      ? Math.min(1, rulesCards.length)
      : Math.min(3, rulesCards.length);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: slidesNum,
    speed: 600,
    arrows: true,
    dots: true,
  };

  return (
    <div className='introduction'>
      <h1 className='heading'>Why Internship?</h1>
      <div className='rules_reg'>
        <h1 className='heading'>Rules and Regulations</h1>
        <Slider {...settings}>
          {rulesCards.map((card) => (
            <RulesCard card={card} />
          ))}
        </Slider>
      </div>
      <h1 className='heading'>Is CP important?</h1>
      <div className='research_vs_internship'>
        <div className='card'>
          <h1>Research</h1>
          <ul>
            <li>
              Aliquip ex voluptate ullamco amet anim cupidatat culpa non nulla
              cillum aliquip deserunt adipisicing. Exercitation veniam enim
              pariatur pariatur minim commodo ad esse deserunt consectetur elit
              occaecat ad.
            </li>
            <li>
              Aliquip ex voluptate ullamco amet anim cupidatat culpa non nulla
              cillum aliquip deserunt adipisicing. Exercitation veniam enim
              pariatur pariatur minim commodo ad esse deserunt consectetur elit
              occaecat ad.
            </li>
            <li>
              Aliquip ex voluptate ullamco amet anim cupidatat culpa non nulla
              cillum aliquip deserunt adipisicing. Exercitation veniam enim
              pariatur pariatur minim commodo ad esse deserunt consectetur elit
              occaecat ad.
            </li>
          </ul>
          <img src='https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_research.png' />
        </div>
        <div className='vs'>v/s</div>
        <div className='card'>
          <h1>Internship</h1>
          <ul>
            <li>
              Aliquip ex voluptate ullamco amet anim cupidatat culpa non nulla
              cillum aliquip deserunt adipisicing. Exercitation veniam enim
              pariatur pariatur minim commodo ad esse deserunt consectetur elit
              occaecat ad.
            </li>
            <li>
              Aliquip ex voluptate ullamco amet anim cupidatat culpa non nulla
              cillum aliquip deserunt adipisicing. Exercitation veniam enim
              pariatur pariatur minim commodo ad esse deserunt consectetur elit
              occaecat ad.
            </li>
            <li>
              Aliquip ex voluptate ullamco amet anim cupidatat culpa non nulla
              cillum aliquip deserunt adipisicing. Exercitation veniam enim
              pariatur pariatur minim commodo ad esse deserunt consectetur elit
              occaecat ad.
            </li>
          </ul>
          <img src='https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_internship.png' />
        </div>
      </div>
      <PageFooter
        settings={{
          left: {
            alignment: 'left',
            colors: ['#236FDC', ' #43AEDA'],
            image: metadata['preparation'].image,
            redirect: {
              linkType: 'link',
              link: 'https://iiitdplaybook.web.app/homepage',
            },
            title: 'Research with Professors',
          },
          right: {
            alignment: 'right',
            image: metadata['resume'].image,
            redirect: {
              linkType: 'component',
              componentName: 'resume',
            },
            setActive: callback,
            title: 'Build Your Resume',
          },
        }}
      />
    </div>
  );
};

export default Introduction;
