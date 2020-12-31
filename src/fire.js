import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAiXO2Tf-PdAWv0VFLn5x1gytZW4Qw8RyY",
    authDomain: "iiitd-student-playbook.firebaseapp.com",
    databaseURL: "https://iiitd-student-playbook.firebaseio.com",
    projectId: "iiitd-student-playbook",
    storageBucket: "iiitd-student-playbook.appspot.com",
    messagingSenderId: "557827916584",
    appId: "1:557827916584:web:679950ab0a34089436461d",
    measurementId: "G-5BBSPSTEEE"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider().setCustomParameters({ hd: "iiitd.ac.in" });
firebase.analytics();

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          console.log("Multiple tabs open, persistence can only be enabled")
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          console.log("The current browser does not support all of the")
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully

export default fire;
export {auth, provider};