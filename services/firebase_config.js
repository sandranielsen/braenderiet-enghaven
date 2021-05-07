"use strict";

const firebaseConfig = {
  apiKey: "AIzaSyAqTHdkW13g0TDpiXDDUBvG0cfEamZJsEE",
  authDomain: "braenderiet-enghaven-ad840.firebaseapp.com",
  projectId: "braenderiet-enghaven-ad840",
  storageBucket: "braenderiet-enghaven-ad840.appspot.com",
  messagingSenderId: "330791683465",
  appId: "1:330791683465:web:850be756c4fab8b1f1cd58"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseDB = firebase.firestore();
