
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7DEzzKr3F034eAkFYRjwYnKd0KQR7HCs",
  authDomain: "ecogrid-ai-1.firebaseapp.com",
  projectId: "ecogrid-ai-1",
  storageBucket: "ecogrid-ai-1.appspot.com",
  messagingSenderId: "1054238760560",
  appId: "1:1054238760560:web:1df20f1fed0ded9ab7deb5",
  measurementId: "G-FPRC7EN3JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Only initialize analytics in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

export default app;
