import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {

    apiKey: "AIzaSyDOWaYSMncqc9NwzOqpIyI2DMAxEVd1USg",
    authDomain: "crwn-db-fffd5.firebaseapp.com",
    projectId: "crwn-db-fffd5",
    storageBucket: "crwn-db-fffd5.appspot.com",
    messagingSenderId: "208806241878",
    appId: "1:208806241878:web:5f8e47e2914a60c1fe3df7",
    measurementId: "G-4XZ659E5MX"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


