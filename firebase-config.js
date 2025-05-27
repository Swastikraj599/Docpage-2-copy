export const firebaseConfig = {
  apiKey: "AIzaSyD1HpQF9FbWKsnZzYT8jpIoZXtTS8y72D8",
  authDomain: "login-example-2ee43.firebaseapp.com",
  projectId: "login-example-2ee43",
  storageBucket: "login-example-2ee43.appspot.com",
  messagingSenderId: "185903382168",
  appId: "1:185903382168:web:5ae3e9ff7f4232b161daed"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
