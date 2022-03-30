import firebase from "firebase";
  const firebaseConfig = {
  apiKey: "AIzaSyATtElL1ioO5WnYGqd3kSNT7z56MGB9EZM",
  authDomain: "devscart-608b7.firebaseapp.com",
  projectId: "devscart-608b7",
  storageBucket: "devscart-608b7.appspot.com",
  messagingSenderId: "284864819043",
  appId: "1:284864819043:web:e3a4ad1924510c3f51ed56",
  measurementId: "G-P139RY3WX2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
