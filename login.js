const firebaseConfig = {
  apiKey: "AIzaSyCtOVTEqWc7iKendF-FvL5HX__aQSYoOx0",
  authDomain: "course-1c09e.firebaseapp.com",
  projectId: "course-1c09e",
  storageBucket: "course-1c09e.firebasestorage.app",
  messagingSenderId: "593826825467",
  appId: "1:593826825467:web:0bb08f3e15b1ff20f05c5e",
  measurementId: "G-X4PHLETC34"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html"; // Change this to your dashboard or homepage
        })
        .catch((error) => {
            alert(error.message);
        });
});
