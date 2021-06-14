import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAWfVwmIo1s7AYmZjFXh9B1CRZkD8R-QAM",
    authDomain: "rzr-react-db.firebaseapp.com",
    projectId: "rzr-react-db",
    storageBucket: "rzr-react-db.appspot.com",
    messagingSenderId: "77029417759",
    appId: "1:77029417759:web:6009aeeb8773ccfe96c62a",
    measurementId: "G-8TP06ZT77F"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;