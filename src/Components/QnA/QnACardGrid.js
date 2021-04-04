import React from 'react';
import QnACard from './QnACards';

function QnACardGrid({ itemList }) {

  return itemList.map((item) => {
    return <QnACard item={item} />;
  });
}

export default QnACardGrid;