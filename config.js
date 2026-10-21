// CS-12 One Stop Shop: Firebase settings.
// Firebase console → Project settings (gear) → General → Your apps → Web app → "SDK setup and configuration" → Config.
// Copy the values between the quotes below. These keys are meant to be public; the security rules protect the data.
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
// The site owner: always has staff access. Must match the email in firestore.rules.
window.CS12_OWNER = "sophiekent04@gmail.com";
