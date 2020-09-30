import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
export const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDTZFEDN-Lgg9rdanVuBhKBHKUhYYBGaMQ",
    authDomain: "instaclone-c2c93.firebaseapp.com",
    databaseURL: "https://instaclone-c2c93.firebaseio.com",
    projectId: "instaclone-c2c93",
    storageBucket: "instaclone-c2c93.appspot.com",
    messagingSenderId: "16394765383",
    appId: "1:16394765383:web:cb8effb9c5b7d6d034dd62",
    measurementId: "G-K1QPR4GZBK"
})
export const db=firebaseApp.firestore();
export const auth=firebase.auth();
export const storage=firebase.storage();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDTZFEDN-Lgg9rdanVuBhKBHKUhYYBGaMQ",
//     authDomain: "instaclone-c2c93.firebaseapp.com",
//     databaseURL: "https://instaclone-c2c93.firebaseio.com",
//     projectId: "instaclone-c2c93",
//     storageBucket: "instaclone-c2c93.appspot.com",
//     messagingSenderId: "16394765383",
//     appId: "1:16394765383:web:cb8effb9c5b7d6d034dd62",
//     measurementId: "G-K1QPR4GZBK"
//   };
// export default db;
