import React from "react";
import HMUCard from "./HMUCard";
import firebase from "firebase";

function HMUCardGrid({ itemList }) {
  const user = firebase.auth().currentUser;

  // console.log(itemList);
  return itemList.map((item) => {
    return <HMUCard item={item} uid={user === null ? "" : user.uid} />;
  });
}

export default HMUCardGrid;
