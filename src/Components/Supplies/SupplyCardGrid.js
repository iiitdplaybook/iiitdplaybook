import React from 'react';
import SupplyCard from './SupplyCard';
import firebase from 'firebase';

function SupplyCardGrid({ itemList }) {
  const user = firebase.auth().currentUser;
  console.log(itemList);
  return itemList.map((item) => {
    return <SupplyCard item={item} uid={user.uid} />;
  });
}

export default SupplyCardGrid;
