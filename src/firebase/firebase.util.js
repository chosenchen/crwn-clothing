import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCONjaW3eGLTpy0DfEu-ohxKoB-88l29Ys",
    authDomain: "crown-db-6d506.firebaseapp.com",
    projectId: "crown-db-6d506",
    storageBucket: "crown-db-6d506.appspot.com",
    messagingSenderId: "387851994999",
    appId: "1:387851994999:web:460462725eafcf95180372"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;