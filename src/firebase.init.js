// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_authDomain,
//     authDomain: process.env.REACT_APP_apiKey,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };
const firebaseConfig = {
    apiKey: "AIzaSyBps0sJ1xufcqsB9JXf2J7rPOYt1WSN5SQ",
    authDomain: "shoppable-grocery-website.firebaseapp.com",
    projectId: "shoppable-grocery-website",
    storageBucket: "shoppable-grocery-website.appspot.com",
    messagingSenderId: "454548340541",
    appId: "1:454548340541:web:7503dda571f8efe001cf54"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;