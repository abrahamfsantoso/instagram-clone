import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDajiIYmAOaFNxOQZdVuyH8f2B4BK_Ka-8',
  authDomain: 'instagram-clone-b4a25.firebaseapp.com',
  projectId: 'instagram-clone-b4a25',
  storageBucket: 'instagram-clone-b4a25.appspot.com',
  messagingSenderId: '112074387928',
  appId: '1:112074387928:web:f5375022cc7b00feb042ad'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file (JUST ONCE)
// seedDatabase(firebase);

export { firebase, FieldValue };
