import React, { useEffect } from 'react';
import './PhasesOfCollege.css';

function PhasesOfCollege() {
  const itemList = [
    {
      title: 'brewbakes',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/brewbakes.jpeg',
    },
    {
      title: 'dandiya',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/library.jpeg',
    },
    {
      title: 'holi',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/holi.jpeg',
    },
    {
      title: 'library',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/library.jpeg',
    },
    {
      title: 'seminar',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/seminar.jpeg',
    },
  ];

  useEffect(() => {
    const items = [],
      point = document.querySelector('.phases-svg').createSVGPoint();

    function getCoordinates(e, svg) {
      point.x = e.clientX;
      point.y = e.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    }

    function Item(config) {
      Object.keys(config).forEach(function (item) {
        this[item] = config[item];
      }, this);

      this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
      this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
    }

    Item.prototype = {
      update: function update(c) {
        this.clip.setAttribute('cx', c.x);
        this.clip.setAttribute('cy', c.y);
      },
      mouseMoveHandler: function mouseMoveHandler(e) {
        this.update(getCoordinates(e, this.svg));
      },
      touchMoveHandler: function touchMoveHandler(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (touch) return this.update(getCoordinates(touch, this.svg));
      },
    };

    [].slice
      .call(document.querySelectorAll('.item'), 0)
      .forEach(function (item, index) {
        items.push(
          new Item({
            el: item,
            svg: item.querySelector('.phases-svg'),
            clip: document.querySelector('#clip-' + index + ' circle'),
          })
        );
      });
  });

  return (
    <div className='college-phases'>
      <div className='items'>
        {itemList.map((item, index) => {
          // console.log(index);
          if (index === Math.floor(itemList.length / 2))
            return (
              <>
                <h1 className='textCard'>Phases of College Life</h1>
                <div className='item'>
                  <svg
                    className='phases-svg'
                    preserveAspectRatio='xMidYMid slice'
                    viewBox='0 0 300 200'
                  >
                    <defs>
                      <clipPath id={'clip-' + index}>
                        <circle cx='0' cy='0' r='150px'></circle>
                      </clipPath>
                    </defs>
                    <g clip-path={'url(#clip-' + index + ')'}>
                      <image
                        height='100%'
                        preserveAspectRatio='xMinYMin slice'
                        width='100%'
                        xlinkHref={item.img}
                      ></image>
                    </g>
                  </svg>
                </div>
              </>
            );
          return (
            <div className='item'>
              <svg
                className='phases-svg'
                preserveAspectRatio='xMidYMid slice'
                viewBox='0 0 300 200'
              >
                <defs>
                  <clipPath id={'clip-' + index}>
                    <circle cx='0' cy='0' r='150px'></circle>
                  </clipPath>
                </defs>
                <g clip-path={'url(#clip-' + index + ')'}>
                  <image
                    height='100%'
                    preserveAspectRatio='xMinYMin slice'
                    width='100%'
                    xlinkHref={item.img}
                  ></image>
                </g>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhasesOfCollege;
