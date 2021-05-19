// Importing dependencies
import React, {useEffect, useState} from 'react';
import firebase from 'firebase';
import Card from './card';
import VerticalSlickSlider from './VerticalSlickSlider';

// Exporting function
export default function InternshipTips(){
    // Creating States
    const [tips,setTips] = useState([]);
    // Extracting data from firebase
    const data=async() => {
        let temp1=[];
        let babyStepRef = firebase
      .database()
      .ref('Testimonies/Preparation');
    await babyStepRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let dict = {};
        dict.Name = childSnapshot.val().Name;
        dict.Designation = childSnapshot.val().Designation;
        dict.LinkedIN = childSnapshot.val().LinkedIn;
        dict.Organization = childSnapshot.val().Organization;
        dict.Profile_Pic = childSnapshot.val().Profile_Pic;
        dict.Resources = childSnapshot.val().Resources;
        dict.Tips = childSnapshot.val().Tips;
        temp1.push(dict);
        temp1.push(dict);
        temp1.push(dict);
        temp1.push(dict);
        temp1.push(dict);
        temp1.push(dict);
        temp1.push(dict);
      });
    });
    setTips(temp1);
    };
    useEffect(() => {
        data();
        return () => {};
      }, []);


    // Return 
    return (
        <>
        <VerticalSlickSlider properties={tips}/>
        </>
    );
}