import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAFPs6N75Zku38xBBlBcseOlxMkhnLJ1As',
  authDomain: 'chatapp-769b6.firebaseapp.com',
  databaseURL: 'https://chatapp-769b6.firebaseio.com/',
  projectId: 'chatapp-769b6',
  storageBucket: 'chatapp-769b6.appspot.com',
  messagingSenderId: '203919598201',
  appId: "1:203919598201:android:924cf4568c32d0ca19eaa8"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();