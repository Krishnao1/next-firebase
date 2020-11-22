import firebase from 'firebase/app';
import 'firebase/firestore';

// export default function loadFirebase(){
   
//   try {
//     const firebaseConfig = {
      // apiKey: "AIzaSyDVCNpbukOXHLwO44haGaFFFRs7BtFCdeI",
      // authDomain: "nextproject-28960.firebaseapp.com",
      // databaseURL: "https://nextproject-28960.firebaseio.com",
      // projectId: "nextproject-28960",
      // storageBucket: "nextproject-28960.appspot.com",
      // messagingSenderId: "610899302651",
      // appId: "1:610899302651:web:5b7f29fbb88288d968385e",
      // measurementId: "G-5SWXFFEH0E"
//     };
//     firebase.initializeApp(firebaseConfig)
//     firebase.firestore().settings({timestampsInSnapshots:true})
   
//   }catch(error){
    
//   }
//   return firebase 
// }

const firebaseConfig = {
  apiKey: "AIzaSyDVCNpbukOXHLwO44haGaFFFRs7BtFCdeI",
  authDomain: "nextproject-28960.firebaseapp.com",
  databaseURL: "https://nextproject-28960.firebaseio.com",
  projectId: "nextproject-28960",
  storageBucket: "nextproject-28960.appspot.com",
  messagingSenderId: "610899302651",
  appId: "1:610899302651:web:5b7f29fbb88288d968385e",
  measurementId: "G-5SWXFFEH0E"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;