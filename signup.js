// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtOVTEqWc7iKendF-FvL5HX__aQSYoOx0",
  authDomain: "course-1c09e.firebaseapp.com",
  projectId: "course-1c09e",
  storageBucket: "course-1c09e.firebasestorage.app",
  messagingSenderId: "593826825467",
  appId: "1:593826825467:web:0bb08f3e15b1ff20f05c5e",
  measurementId: "G-X4PHLETC34"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore(); // Firestore for storing user data

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById("full-name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;

    // Signup user
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save extra data to Firestore
            return db.collection("users").doc(user.uid).set({
                fullName: fullName,
                username: username,
                email: email,
                phone: phone,
                dob: dob,
                address: address,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
