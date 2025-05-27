// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

// Your web app's Firebase configuration
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

// Toast Helper Function
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

// Submit Button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    showToast("error", "Please enter both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showToast("success", "🎉 Account Created Successfully!");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    })
    .catch((error) => {
      showToast("error", `❌ ${error.message}`);
    });
});


