// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDXgsj6mypw9dHkeI2X1bI1LM9ayC-wYQo",
  authDomain: "deliveries-status.firebaseapp.com",
  databaseURL: "https://deliveries-status-default-rtdb.firebaseio.com",
  projectId: "deliveries-status",
  storageBucket: "deliveries-status.appspot.com",
  messagingSenderId: "154377333799",
  appId: "1:154377333799:web:b028f2037e5764b7527202"
};

// Initialize Firebase
firebase.initializeApp(config);
export default firebase;