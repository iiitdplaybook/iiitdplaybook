
import React, { useEffect, useRef } from 'react';
import '../global.css';
import './Introduction.css';

const Introduction = () => {
  const sectionRef = useRef(null);
  const top = 0;
  const right = 0;

  useEffect(() => {
    top = sectionRef.current.offsetHeight / 2;
    right = sectionRef.current.offsetWidth / 2;
  })

  return (
    <div className='introduction'>
      <h1 className='heading'>Why Internship?</h1>
      <h1 className='heading'>Rules and Regulations</h1>
      <h1 className='heading'>Is CP important?</h1>
      <div className='research_vs_internship' ref={sectionRef}>
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
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Introduction;
