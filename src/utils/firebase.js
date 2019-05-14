import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBeRLcs8c8IWuu4-agCmvFDYJ-iNiU0EOw",
  authDomain: "cifood.firebaseapp.com",
  databaseURL: "https://cifood.firebaseio.com",
  projectId: "cifood",
  storageBucket: "cifood.appspot.com",
  messagingSenderId: "806041658000",
  appId: "1:806041658000:web:031256352b1b97cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();