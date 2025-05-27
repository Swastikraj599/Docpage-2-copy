// verify-reset.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, confirmPasswordReset } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

// ✅ Step 1: Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD1HpQF9FbWKsnZzYT8jpIoZXtTS8y72D8",
  authDomain: "login-example-2ee43.firebaseapp.com",
  projectId: "login-example-2ee43",
  storageBucket: "login-example-2ee43.appspot.com",
  messagingSenderId: "185903382168",
  appId: "1:185903382168:web:5ae3e9ff7f4232b161daed"
};

// ✅ Step 2: Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Step 3: Get oobCode from URL
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get('oobCode');

// ✅ Step 4: Handle form submission
document.getElementById('reset-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const newPassword = document.getElementById('new-password').value;
  const messageEl = document.getElementById('message');

  if (!oobCode) {
    messageEl.textContent = "Invalid or missing reset code.";
    return;
  }

  confirmPasswordReset(auth, oobCode, newPassword)
    .then(() => {
      messageEl.textContent = "✅ Password has been reset successfully. Redirecting to login...";
      setTimeout(() => {
        window.location.href = "index.html"; // 🔁 Redirect to your login page
      }, 3000);
    })
    .catch((error) => {
      messageEl.textContent = `❌ Error: ${error.message}`;
    });
});


