import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmP1ZgDThTvhpLVuaFWW0ToroGoDUve_4",
  authDomain: "skcofee-e5b9e.firebaseapp.com",
  projectId: "skcofee-e5b9e",
  storageBucket: "skcofee-e5b9e.appspot.com",
  messagingSenderId: "645225509124",
  appId: "1:645225509124:web:ab179f108d69ffd41b6051",
  measurementId: "G-Z4L780ZX37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;