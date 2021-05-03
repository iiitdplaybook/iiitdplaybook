import React from 'react';
import QnACard from './QnACard';

function QnACardGrid({ cardList }) {
  const colors = [
    ['#9F4EAD', '#EEB86D'],
    ['#2FB8FF', '#95E8DC'],
    ['#9F7FE5', '#5497E3'],
    ['#236FDC', '#4BBEFF'],
    ['#4A90F3', '#7EF29D'],
    ['#412FAF', '#50C1E8'],
    ['#181C33', '#4F4181'],
    ['#2587A6', '#6FF7E8'],
    ['#F57F36', '#FFD78A'],
    ['#BD5D94', '#17086E'],
    ['#5C0DB1', '#DBCCFF'],
  ];

  return cardList.map((card, id) => {
    return <QnACard card={card} colors={colors[id % colors.length]} />;
  });
}

export default QnACardGrid;
