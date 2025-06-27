// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Paste your config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make function available globally
window.submitContactForm = async function (formData) {
  try {
    await addDoc(collection(db, "contactForm"), formData);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};



// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // ✅ Replace these with your own config
// const firebaseConfig = {
//   apiKey: "AIzaSyByjnnbWYVYJ6DlBtwyTw9DGYH16N6Dajg",
//   authDomain: "portfolio-56740.firebaseapp.com",
//   projectId: "portfolio-56740",
//   storageBucket: "portfolio-56740.appspot.com",
//   messagingSenderId: "783430097477",
//   appId: "1:783430097477:web:7abe8974adf2d6108a12c",
//   measurementId: "G-NABCETP012"
// };

// // ✅ Initialize
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // ✅ Export properly
// export { app, auth, db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyByjnnbWYVYJ6DlBtwyTw9DGYH16N6Dajg",
//   authDomain: "portfolio-567d0.firebaseapp.com",
//   projectId: "portfolio-567d0",
//   storageBucket: "portfolio-567d0.firebasestorage.app",
//   messagingSenderId: "783430097477",
//   appId: "1:783430097477:web:7abea8974daf2d6108a12c",
//   measurementId: "G-NWBCETP012"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




