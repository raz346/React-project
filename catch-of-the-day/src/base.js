import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDns4ymU1WzwBGy1huPYEsAARz7icfJpn8",
  authDomain: "catch-of-the-day-ahmed-3915b.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ahmed-3915b.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
