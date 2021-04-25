import React from 'react';
import PageFooter from '../../PageFooter';
import { metadata } from '../../Metadata';
import '../global.css';
import './Introduction.css';

const Introduction = ({ callback }) => {
  return (
    <div className='introduction'>
      <h1 className='heading'>Why Internship?</h1>
      <h1 className='heading'>Rules and Regulations</h1>
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
            image: metadata['preparation'].image,
            redirect: {
              linkType: 'component',
              componentName: 'resume',
            },
            setActive: callback,
            title: 'Get started with internship preparation',
          },
        }}
      />
    </div>
  );
};

export default Introduction;
