import Service from '@ember/service';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcj22qhxR8mT3TagtYjcsuWmFhKxhsgJA',
  authDomain: 'fir-test-caaf1.firebaseapp.com',
  projectId: 'fir-test-caaf1',
  storageBucket: 'fir-test-caaf1.firebasestorage.app',
  messagingSenderId: '194677908726',
  appId: '1:194677908726:web:ac82e5a0469ea245c2b8d7',
};

// Initialize Firebase

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
}
