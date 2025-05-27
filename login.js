// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD1HpQF9FbWKsnZzYT8jpIoZXtTS8y72D8",
    authDomain: "login-example-2ee43.firebaseapp.com",
    projectId: "login-example-2ee43",
    storageBucket: "login-example-2ee43.appspot.com",
    messagingSenderId: "185903382168",
    appId: "1:185903382168:web:5ae3e9ff7f4232b161daed"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Toast helper
  function showToast(type, message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => container.removeChild(toast), 500);
    }, 3000);
  }

  // Submit button
  const submit = document.getElementById('submit');
  if (submit) {
    submit.addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById('email')?.value;
      const password = document.getElementById('password')?.value;

      if (!email || !password) {
        showToast("error", "Please fill out both email and password.");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          showToast("success", "Congratulations! Successful Authentication!");
          setTimeout(() => {
            window.location.href = "index.html";
          }, 1500);
        })
        .catch((error) => {
          showToast("error", error.message);
        });
    });
  }

  // Reset password
  const reset = document.getElementById("reset");
  if (reset) {
    reset.addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById('email')?.value;

      if (!email) {
        showToast("error", "Please enter your email to reset your password.");
        return;
      }

      const actionCodeSettings = {
        url: 'http://127.0.0.1:5500/verify-reset.html',
        handleCodeInApp: true
      };

      sendPasswordResetEmail(auth, email, actionCodeSettings)
        .then(() => {
          showToast("success", "✅ Password Reset Email Sent! Check your inbox.");
        })
        .catch((error) => {
          showToast("error", `❌ ${error.message}`);
        });
    });
  }

  // Google sign-in
  const googleSignIn = document.getElementById("google-signin");
  if (googleSignIn) {
    googleSignIn.addEventListener("click", function (event) {
      event.preventDefault();

      signInWithPopup(auth, provider)
        .then((result) => {
          showToast("success", "Signed in with Google!");
          setTimeout(() => {
            window.location.href = "dashboard.html";
          }, 1500);
        })
        .catch((error) => {
          showToast("error", error.message);
        });
    });
  }
});

