import React, { useState, useEffect } from 'react';
import TextCard from '../TextCard/TextCard';
import TestimonialsAlt from '../Testimonies 2.0/TestimonialsAlt';
import firebase from 'firebase';
import VerticalSlickSlider from '../VerticalSlickSlider/VerticalSlickSlider';
import InternshipTips from '../VerticalSlickSlider/InternshipTips';

function ComingSoonTools() {
  const [textCardData, setTextCardData] = useState([]);
  const [testimoniesAltData, setTestimoniesAltData] = useState([]);

  const getTestimonies = async () => {

    let temp1 = []
    let temp2 = []

    let cardsData = firebase
      .database()
      .ref('Placements/Interview Tips Cards');
    await cardsData.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let dict = {};
        dict.img = childSnapshot.val().img;
        dict.text = childSnapshot.val().text;
        temp1.push(dict)
      });
    });

    let getTestimonies = firebase
      .database()
      .ref('Testimonies/Placement-Is CP Important');
    await getTestimonies.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().isApproved == true) {
          let name = childSnapshot.val().Name;
          let text = childSnapshot.val().Text;
          let userProfile = childSnapshot.val().UserAvatar;
          let dict = {};
          dict.UserAvatar = userProfile;
          dict.Text = text;
          dict.Name = name;
          dict.isApproved = true;
          temp2.push(dict);
        }
      });
    });

    setTextCardData(temp1)
    setTestimoniesAltData(temp2)
  };
  useEffect(() => {
    getTestimonies();
    return () => {};
  }, []);
  return (
    <>
    {/*
    <TextCard props={textCardData.slice(0,Math.min(4,textCardData.length))} />
    <TestimonialsAlt portraits={testimoniesAltData} />
    { textCardData.length > 4 ? (<TextCard props={textCardData.slice(4)} />) : <div></div>}
    <div className="Margin" style={{height:"50px"}}></div>*/}
    <InternshipTips/>
    </>
  );
}

export default ComingSoonTools;
