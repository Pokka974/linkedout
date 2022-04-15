import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyCr1ZVH2six7UqKIXPIZdfMdDnnYbrnMpQ",
      authDomain: "linkedout-65579.firebaseapp.com",
      projectId: "linkedout-65579",
      storageBucket: "linkedout-65579.appspot.com",
      messagingSenderId: "608101317407",
      appId: "1:608101317407:web:b9e09abbf469788e3f4e2a",
      measurementId: "G-JWFRJ77685"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }