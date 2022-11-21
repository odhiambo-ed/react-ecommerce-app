import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBa7dGi6ulmjNBS3vSaj30we3NupIZqM5c',
  authDomain: 'code-labs-e5dc3.firebaseapp.com',
  projectId: 'code-labs-e5dc3',
  storageBucket: 'code-labs-e5dc3.appspot.com',
  messagingSenderId: '239301692411',
  appId: '1:239301692411:web:24569433042962adf3595e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const store = firebaseApp.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, store };
export default db;
